import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../App';

function AllProducts() {

    let [product, setProduct] = useState([])
    let token = sessionStorage.getItem('token')

    //function for get all product details
    const getProduct = async () => {
        try {
            let res = await axios.get(`${url}/admin/getProducts`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if (res.status === 200) {
                // received date updated in state of array
                setProduct(res.data.values)
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getProduct()
    }, [])



    return (
        <div className='text-white all-products'>
            <div className='text-center text-danger'><h4>All Products</h4></div>
            <div className='p-2'>
                <Table bordered className='mt-2 text-center p-3'>
                    <thead className='text-danger'>
                        <tr>
                            <th>S.No</th>
                            <th>Category</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {product.map((e, i) => {
                            //we using state for store data so we use condition for !==[], we can iterate and display from state
                            if (e !== []) {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.category}</td>
                                        <td>{e.name}</td>
                                        <td>{e.description}</td>
                                        <td>{e.price}</td>
                                    </tr>
                                );
                            }
                        })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AllProducts
