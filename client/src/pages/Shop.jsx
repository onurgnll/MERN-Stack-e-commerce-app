/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import "../style/shop.css"
import { useEffect } from "react";
import { getProducts } from "../redux/features/products/productSlice";
import { getCategories } from "../redux/features/categories/categoriesSlice";
import { List } from "@mui/material";
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
function Shop() {


    const { categories } = useSelector(state => state.categories);
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const filteredProducts = products.filter((element) =>
        checked.includes(element.category)
    );


    useEffect(() => {

        dispatch(getCategories()).then(() => {

            dispatch(getProducts()).then(() => {
                const selectedCategories = categories.map(category => category.name);
                setChecked(selectedCategories);
            })
        })


    }, [dispatch])


    return (
        <div className="shop">

            <div className="shopmain">
                <div className="categories col-2">
                    <List dense sx={{ width: '100%', maxWidth: 360, }}>
                        {categories.map((value) => {
                            return (
                                <ListItem
                                    key={value._id}
                                    secondaryAction={

                                        <Checkbox
                                            edge="end"
                                            onChange={handleToggle(value.name)}
                                            checked={checked.indexOf(value.name) !== -1}
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton onClick={handleToggle(value.name)}>
                                        <ListItemText primary={`${value.name}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </div>

                <div className="col-10">
                    <h1 className="text-center m-1 mt-2">Ürünler</h1>
                    <div className="products">
                        {filteredProducts.length == 0
                            ?
                            (
                                products.map((element) => (
                                    <Product key={element._id} product={element} />
                                )))
                            :
                            (
                                filteredProducts.map((element) => (
                                    <Product key={element._id} product={element} />
                                )))
                        }

                    </div>

                </div>

            </div>


        </div>


    );
}

export default Shop;