import React from 'react'
import axios from "axios";
import { url } from "../../App";
import { toast } from "react-toastify";
import { allProducts } from "../reducer/productReducer";
import { filterItems } from '../reducer/productReducer';

let token = sessionStorage.getItem('token')

export var fetchProducts = async (dispatch) => {
    try {

        let response = await axios.get(`${url}/product-details`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        dispatch(allProducts(response.data.product))

    } catch (error) {
        console.log(error);
    }
}



// //function for filter
// export const filterProducts = async (category, searchKey, dispatch) => {
//     let filteredProducts;
//     let filteredCategory;
//     try {
//         let res = await axios.get(`${url}/product-details`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             }
//         })

//         console.log(category);
//         console.log(searchKey);

//         console.log(res);

//         if (searchKey === "" && category === "All") {
//             console.log("all called");
//             dispatch(filterItems(res.data.product));
//         }

//         if (searchKey !== "" && category === "All") {
//             filteredProducts = res.data.product.filter((e) =>
//                 e.name.toLowerCase().includes(searchKey)
//             );
//             dispatch(filterItems(filteredProducts));
//         } else if (searchKey === "" && category !== "All") {
//             filteredCategory = res.data.product.filter(
//                 (e) => e.category === category
//             );
//             // dispatch(filterItems(filteredCategory));
//         } else if (searchKey !== "" && category !== "All") {
//             filteredProducts = res.data.product.filter((e) =>
//                 e.name.toLowerCase().includes(searchKey)
//             );
//             dispatch(filterItems(filteredProducts));
//         }
//     } catch (error) {
//         console.log(error);
//         toast.error("Product doesn't exist")
//     }
// };










