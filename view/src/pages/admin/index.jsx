import React, { useEffect, useState } from 'react'
import Header from '../../layout/header'
import UserIcon from '../../assets/icons/userIcon'
import PrimaryInlineButton from '../../components/PrimaryInlineButton'
import OrderCardAdmin from './OrderCardAdmin'
import Footer from '../../layout/footer'
import { Link } from 'react-router-dom'
import { handelshowAllOrdersService } from '../../api/services'
import Cookies from 'js-cookie';

function AdminPanel() {
    const userPrrofile = Cookies.get("authToken") || ""
    const [activeOrderStatus , setActiveOrderStatus] = useState("pending")
    const [orders , setOrders] = useState([])
    const getData = async()=>{
        try {
            const res = await handelshowAllOrdersService(userPrrofile)
            if(res.status == 200){
                console.log("API Response:", res.data.orders)
                setOrders(res.data.orders)
            }

        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(orders)
    
    return (
        <>
            <Header />
            <div className='pt-7  px-6 sm:px-10 md:px-16 lg:px-22 xl:px-24 pb-4'>
                <div className='flex items-center gap-2 mb-3'>
                    <UserIcon />
                    <div>
                        <h1 className='font-vazirmatn text-sm'>محمد حسین</h1>
                        <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light text-gray-500'>09032153600</p>
                    </div>
                </div>
                <Link to="/creatProduct">
                    <PrimaryInlineButton text="ساخت محصول جدید" click={() => { console.log("clicked") }} className="border border-black text-black py-1 text-xs px-3" />
                </Link>
            </div>
            <div className='w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/4 mx-auto flex justify-between'>
                <button className={`font-vazirmatn text-xs ${ activeOrderStatus == "pending" ? "text-green-500 font-semibold" : "font-medium"}`} onClick={()=> setActiveOrderStatus("pending")}>ارسال نشده ها</button>
                <button className={`font-vazirmatn text-xs ${ activeOrderStatus == "all" ? "text-green-500 font-semibold" : "font-medium"}` } onClick={()=> setActiveOrderStatus("all")}>همه</button>
                <button className={`font-vazirmatn text-xs ${ activeOrderStatus == "rejected" ? "text-green-500 font-semibold" : "font-medium"}`} onClick={()=> setActiveOrderStatus("rejected")}>مرجوعی ها</button>
            </div>
            <div>
                {
                    orders.map((order) => <OrderCardAdmin code ={order.id} name ={order.name} phoneNumber ={order.phoneNumber} address ={order.address} postCode ={order.postCode} status={order.status} products ={order.products} />)
                    
                }
            </div>
            <Footer />
        </>
    )
}

export default AdminPanel