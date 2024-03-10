import React from 'react'
import MoreIcon from '../../assets/icons/more'
import BasketIcon from '../../assets/icons/basket'
import UserIcon from '../../assets/icons/userIcon'
import awanLogo from '../../assets/images/awanLogo.png'

function Header() {
    return (
        <div className='h-20 flex justify-between shadow-sm items-center px-7'>
            <MoreIcon />
            <img className='' src={awanLogo} alt="awanLogo" />
            <div className='flex gap-2 items-center '>
                <BasketIcon />
                <UserIcon />
            </div>
        </div>
    )
}

export default Header