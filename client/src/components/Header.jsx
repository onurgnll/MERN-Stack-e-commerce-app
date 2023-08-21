import { Link, NavLink, useNavigate } from "react-router-dom";
import "../style/header.css"
import icon from "../assets/Creaus-logos_white.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Menu, MenuItem, Divider, Snackbar, Alert, Typography } from "@mui/material";
import {  useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../redux/features/auth/authSlice";
import { removeAll } from "../redux/features/cartProducts/cartProductsSlice";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const logoutHandle = () => {
        localStorage.removeItem("access_data");
        navigate("/")
        dispatch(logout());
        dispatch(removeAll());
    }

    const { cartSize, cartItems, cartSum } = useSelector(state => state.cartProduct);
    const { isLogged } = useSelector(state => state.auth);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const openControl = Boolean(anchorEl)

    return (

        <div className="navibar">

            <div className="naviicon">
                <img src={icon} alt="" />
            </div>

            <div className="links" >
                <NavLink className="navlink hepsi" to="/">Anasayfa</NavLink>
                <NavLink className="navlink hepsi" to="/shop">Ürünler</NavLink>
                <NavLink className="navlink hepsi" to="/add">Ekle</NavLink>

                {!isLogged
                    ?
                    (<NavLink className="navlink hepsi" to="/login">Giriş Yap</NavLink>) :

                    (<><div className="d-flex align-items-center " onClick={handleClick}>
                        <div className="d-flex hepsi">
                            <Badge color="primary" className="cartttt" badgeContent={cartSize} showZero>
                                <ShoppingCartIcon className="cart cartttt"></ShoppingCartIcon>

                            </Badge>
                            <div className="sepetim">
                                <Typography variant="h6" className="typ a">Sepetim</Typography>
                                <Typography className="typ fiyat">{cartSum} TL</Typography>
                            </div>
                            <div className="sepetim1">
                                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>

                            </div>

                        </div>


                    </div>

                        <div>
                            <LogoutIcon onClick={logoutHandle}></LogoutIcon>

                        </div>

                    </>


                    )


                }




                {cartItems.length != 0 ? (

                    <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
                        {cartItems.map((e) => {
                            return (
                                <MenuItem key={e.product._id} onClick={handleClose} className="d-flex justify-content-between">{e.product.name} <span className="badge text-bg-primary">{e.quantity}</span></MenuItem>

                            )
                        })}

                        <Divider />
                        <Link to='/cart' style={{ textDecoration: 'none', color: "black" }}>
                            <MenuItem onClick={handleClose} className="d-flex justify-content-around ">Sepete Git <span>{Math.round(cartSum)}TL</span>  </MenuItem>
                        </Link>


                    </Menu>
                )
                    :
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

                        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                            Sepetiniz Boş
                        </Alert>
                    </Snackbar>






                }







            </div>

        </div>

    );
}

export default Header;