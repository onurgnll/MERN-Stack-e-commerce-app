/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "../style/product.css"
import * as React from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { addTocart } from "../redux/features/cartProducts/cartProductsSlice";
import { Alert, Snackbar } from "@mui/material";

export default function Product({ product }) {
    const dispatch = useDispatch();
    const { isLogged } = useSelector(state => state.auth)

    const clickHandle = () => {
        if(isLogged){

            dispatch(addTocart(product))
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null)
    }

    const openControl = Boolean(anchorEl)

    const handleAdded = () => {
        if(isLogged){
            setAnchorEl("Sepete Eklendi")

        }
        else{
            setAnchorEl("Sepete ürün eklemek için Giriş Yapmalısınız")

        }
    }

    return (

        <div className="card">
            <img src={product.image_url} className="card-img-top" alt={product.image_url} />

            <div className="card-body d-flex justify-content-between">

                <h5 className="card-title">{product.name}</h5>
                <div className="aaa" onClick={clickHandle}>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="card-text">{product.price}TL</p>

                        <AddBoxIcon onClick={handleAdded}></AddBoxIcon>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            open={openControl}
                            autoHideDuration={2000}
                            onClose={handleClose}

                            message="Note archived"
                        >

                            <Alert onClose={handleClose} severity={isLogged?"success":"error"} sx={{ width: '100%' }}>
                                {anchorEl}
                            </Alert>
                        </Snackbar>

                    </div>
                </div>
            </div>
        </div>

    );
}
