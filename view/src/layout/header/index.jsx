import React from 'react'
import MoreIcon from '../../assets/icons/more'
import BasketIcon from '../../assets/icons/basket'
import UserIcon from '../../assets/icons/userIcon'
import awanLogo from '../../assets/images/awanLogo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='h-20 flex justify-between shadow-sm items-center px-7'>
            <MoreIcon />
            <Link to="/">
            <img className='' src={awanLogo} alt="awanLogo" />
            </Link>
            <div className='flex gap-2 items-center '>
            <Link to="/basket"><BasketIcon /></Link>
            <Link to="/adminPanel"><UserIcon /></Link>
                

            </div>
        </div>
    )
}

export default Header