import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRupeeSign } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { deleteCart } from '../redux/reducer/cartReducer';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import axios from 'axios';
import { url } from '../App';


function AddToCart() {

  const cartProducts = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  console.log(cartProducts );

 //Razorpay function to handle payment
  const handleOpenRazoroay = (data) => {
    const options = {
      key: 'rzp_test_ihpFW6sh6MrZFT',
      amount: data.amount,
      currency: data.currency,
      name: 'Pizza-Hot',
      description: 'XYZ',
      order_id: data.id,
      handler: async function (response) {
        try {
          let res = await axios.post(`${url}/payment/verify`, { response });

          if (res.status === 200) {
            navigate('/success')
          }

        } catch (error) {
          console.log(error);
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }


  //function to save orders
  const handlePayment = async () => {
    if (cartProducts.cartTotalQuantity > 0) {
      const amount = cartProducts.cartTotalAmount;

      let res = await axios.post(`${url}/payment/order`, { amount });

      handleOpenRazoroay(res.data.order)

    } else {
      toast.error("Please add product")
    }

  }


  return (
    <div className='container-fluid cart-header'>
      <div className='cart-title'>
        Welcome to Cart
      </div>
      <div className='cart-total text-center p-4 mt-3'>
        <h4>Cart Amount</h4>
        <p>
          Total Amount:<br />
          <b><FaRupeeSign />{cartProducts.cartTotalAmount}</b>
        </p>
        <Button variant='success' onClick={() => handlePayment()}>Pay Now</Button>
      </div>
      <div className='cart-item'>
        {
          cartProducts.cartItems.map((cart, i) => {
            return (
              <div className='d-flex justify-content-center mt-3' key={i}>
                <div className="card mb-3" style={{ width: "700px", borderRadius: "2em" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={cart.e.imgurl} alt="..." width={250} height={250} />
                    </div>
                    <div className="col-md-8 text-center" >
                      <div className="card-body">
                        <h5 className="card-title pt-2">{cart.e.name}</h5>
                        <p className="card-text pt-3">{cart.e.description}</p>
                        <p className="card-text pt-3"><FaRupeeSign /><b>{cart.e.price}</b></p>
                      </div>
                      <div className='d-flex justify-content-around'>
                        <div>
                          <p className='amount-cart'>Qty = {cart.value}</p>
                          <p className='amount-cart'>Amount = {cart.price}</p>
                        </div>
                        <div>
                          <Button variant='danger' onClick={() => dispatch(deleteCart({ index: i, price: cart.price }))}>Remove <RiDeleteBin5Line /></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AddToCart
