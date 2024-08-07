import React from 'react'
import womenJeans from "../../../assets/images/hirimage.png"
import JeanCoat from "../../../assets/images/jeancoat.jpg"
import men from "../../../assets/images/men.jpg"

function Sections() {
    return (
        <>
            <h4 className="font-vazirmatn sm:text-base md:text-lg lg:text-2xl text-neutral-800 text-center mt-5 font-medium">دسته بندی</h4>
            <div className='aspect-w-9 aspect-h-9 sm:aspect-h-7 md:aspect-h-5'>
                <div className='flex gap-4 py-4 mx-auto w-4/5 '>
                    <div className='grow flex flex-col gap-4'>
                        <div style={{ background: `url(${men})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", flexGrow: 1, borderRadius: "16px" }}>
                            <div className='flex justify-center items-center bg-black bg-opacity-55 h-full rounded-2xl'>
                                <p className='font-vazirmatn text-white'>شلوار مردانه</p>
                            </div>
                        </div>
                        <div style={{ background: `url(${JeanCoat})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", flexGrow: 1, borderRadius: "16px" }}>
                            <div className='flex justify-center items-center bg-black bg-opacity-55 h-full rounded-2xl'>
                                <p className='font-vazirmatn text-white'> کت جین</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: `url(${womenJeans})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", flexGrow: 1, borderRadius: "16px" }}>
                        <div className='flex justify-center items-center bg-black bg-opacity-55 h-full rounded-2xl'>
                            <p className='font-vazirmatn text-white'>شلوار زنانه</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sections