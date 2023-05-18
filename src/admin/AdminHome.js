import React, { useEffect } from 'react';
import AdminNavigation from './AdminNavigation'
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';


function AdminHome() {

    let token = sessionStorage.getItem('token');
    let navigate = useNavigate()

     //validation for admin can only access
    const getValidate = async () => {
        try {
        let res = await axios.get(`${url}/admin/getDashboard`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (res.status === 200) {
            toast.success(res.data.message)
        }

        } catch (error) {
            if(error.response.status === 401){
                toast.error("Admin only access");
                navigate('/adminLogin')
            }
            console.log(error);  
        }
    }

    // use effect use to send validation for admin can only access 
    useEffect(() => {
        getValidate()
    })

    return (
        <div className='admin-home'>
            <AdminNavigation />
            <Outlet />
        </div>
    )
}

export default AdminHome;
