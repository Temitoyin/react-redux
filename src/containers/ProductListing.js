import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {setProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import  "./ProductListing.css";
const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get("http://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data))
    }
    useEffect(() =>{
        fetchProducts();
    }, [])
    console.log("products:", products);
    return(
        <div className="ui grid container productListing">
            <ProductComponent />
        </div>
    )
}
export default ProductListing;