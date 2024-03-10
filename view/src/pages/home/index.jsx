import React from 'react'
import Header from '../../layout/header/index.jsx'
import hiroBackground from "../../assets/images/hirimage.png"
function Home() {
    return (
        <>
            <Header/>
            <div style={{ background: `url(${hiroBackground})`, backgroundColor: "#000000", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "100%" , height: "250px" }}>
               <div className='flex justify-center items-center bg-black bg-opacity-55 h-full'>
                   <h1 className='font-vazirmatn text-white'><span className='text-lime-800 text-xl font-medium'>آوان</span> به معنای طراوت و تازگیست</h1>
               </div>
            </div>
        </>
    )
}

export default Home