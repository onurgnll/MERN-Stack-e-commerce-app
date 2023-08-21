import "../style/cartt.css"
import sepet from "../assets/sepet.png"
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import { decreaseAmount, increaseAmount, removeFormCart } from "../redux/features/cartProducts/cartProductsSlice";

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));



function Cart() {


    const { cartItems, cartSum } = useSelector(state => state.cartProduct)
    const dispatch = useDispatch();


    const deleteHandle = (e) => {
        dispatch(removeFormCart(e));
    }
    const addHandle = (e) => {
        dispatch(increaseAmount(e));
    }

    const removeHandle = (e) => {
        dispatch(decreaseAmount(e));
    }



    return (

        <div className="container cartt bg-light">
            <img src={sepet} alt="" />

            <div className="cartcontent">
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h4" className="baslik" component="div">
                        Sepet İçeriğiniz
                    </Typography>
                    <Demo>
                        <div className="content">
                            <div className="contentic">

                                {cartItems.map((e) => {

                                    return (
                                    <ListItem key={e.product._id}
                                        secondaryAction={
                                            <>
                                            <span className="mx-2">
                                             {Math.round(e.quantity*e.product.price)}TL</span>
                                                <IconButton className="mx-3 add" edge="end" aria-label="add" onClick={() => addHandle(e)}>
                                                    <AddIcon />
                                                </IconButton>
                                                {e.quantity}
                                                <IconButton className="mx-3 remove" edge="end" aria-label="remove" onClick={() => removeHandle(e)}>
                                                    <RemoveIcon />
                                                </IconButton>
                                                <IconButton edge="end" className="mx-5" aria-label="delete" onClick={() => deleteHandle(e)}>
                                                    <DeleteIcon />
                                                </IconButton></>
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar src={e.product.image_url}>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={e.product.name}
                                        />
                                    </ListItem>)
                                })}


                            </div>

                        </div>

                    </Demo>



                </Grid>

            </div>
            
                    
            <Typography sx={{ mt: 4, mb: 2 }} variant="h4" className="baslik" component="div">
                        Sepet Tutarı: {Math.round(cartSum)}
                    </Typography>

        </div>

    );
}

export default Cart;