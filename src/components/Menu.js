import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "../redux/productReducer";
import { FaRupeeSign } from 'react-icons/fa';
import Navigation from './Navigation';
import { Button } from 'react-bootstrap';
import { addToCart } from '../redux/cartReducer';



function Menu() {

    //redux hook to get data
    let values = useSelector((state) => state.product)

    let [value, setValue] = useState(1)

    //redux hook to dispatch action 
    let dispatch = useDispatch();

    //prepopulate products details while this page after loading
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

 //function for addToCart send product details store data in addToCart redux storage
    const handleAddToCart = ({ e }) => {
        dispatch(addToCart({
             e, 
             price:value*e.price,
             value}))
       
    }

    if (values.loading === false) {
        return <>
            <div className='fixed-top'> <Navigation /></div>
            <div className='menu-body'>
                <div className=''>
                    <div className="container-fluid px-4 px-lg-5 mt-5">
                        <div className="card-header">
                            {
                                //using map to display the products details
                                values.products.data.product.map((e, i) => {
                                    return (
                                        <div className="col mb-5" key={i}>
                                            <div className="card" style={{ height: '38em', width: '19em' }} >
                                                <div className="badge bg-dark text-white position-absolute"
                                                    style={{ top: "0.5rem", right: "0.5rem" }} key={i}
                                                >
                                                    {e.category}
                                                </div>
                                                <img className="card-img-top" height={250} src={e.imgurl} alt="..." />
                                                <div className="card-body p-2">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{e.name}</h5>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center" style={{ height: '7em' }}>
                                                        {e.description}
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <FaRupeeSign /><b>{e.price}</b>
                                                    </div>
                                                    <hr />
                                                    <div className='d-flex justify-content-around'>
                                                        <div>
                                                            Qty-
                                                            <select onChange={(e) => setValue(e.target.value)} style={{
                                                                backgroundColor: "rgb(232, 61, 61)",
                                                                color: "white", border: "none", borderRadius: '5px'
                                                            }}>
                                                                <option>0</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer border-top-0 bg-transparent">
                                                    <div className="text-center">
                                                        <Button variant='outline-success' onClick={() => handleAddToCart({e})}>Add To cart</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    } else {
        <div>Loading.....</div>
    }
}

export default Menu;


