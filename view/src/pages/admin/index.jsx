import React from 'react'
import Header from '../../layout/header'
import UserIcon from '../../assets/icons/userIcon'
import PrimaryInlineButton from '../../components/PrimaryInlineButton'

function AdminPanel() {
    return (
        <>
            <Header />
            <div className='pt-7 px-6 pb-4'>
                <div className='flex items-center gap-2 mb-3'>
                    <UserIcon />
                    <div>
                        <h1 className='font-vazirmatn text-sm'>محمد حسین</h1>
                        <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light text-gray-500'>09032153600</p>
                    </div>
                </div>
                <PrimaryInlineButton text="ساخت محصول جدید" onclick={()=>{console.log("clicked")}} className="text-xs px-2"/>
            </div>

        </>
    )
}

export default AdminPanel