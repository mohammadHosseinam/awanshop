import React from 'react'
import { NavLink } from 'react-router-dom'

function SectionCard({Image , Name , Link = "#" }) {
    return (
        <NavLink to={Link} className='bg-[#193F91] rounded-b-xl rounded-t-[64px] w-[122px] h-[134px] flex flex-col justify-center items-center'>
            <img src={Image} width={98} height={98} alt="section image" />
            <p className='text-lg text-white font-bold text-center'>{Name}</p>
        </NavLink>
    )
}

export default SectionCard