import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Header from '../../layout/header'
import StarIcon from '../../assets/icons/starIcon'
import ColorButton from '../../components/ColorButton'
import SizeButton from '../../components/SizeButton'
import ProductAttrebute from '../../components/ProductAttrebute'
import Comment from '../../components/Comment'
import CreatComment from './creatComment'
import ProductCard from '../../components/ProductCard'
import PrimaryButton from '../../components/PrimaryButton'
import { useLocation, useParams } from 'react-router-dom'
import { readSingleProductService } from '../../api/services'
import { uploadsURL } from '../../api/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setCreateComment } from '../../store/slices/createComment'
import PlusIcon from '../../assets/icons/plus'
import TrashIcon from '../../assets/icons/trash'
import MinesIcon from '../../assets/icons/mines'
import { toast } from 'react-toastify'

function Product() {
    const location = useLocation()
    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [simulorProducts, setSimulorProducts] = useState([])
    const [productCount, setProductCount] = useState(0)
    const [selectedSize, setSize] = useState("")
    const createComment = useSelector((state) => state.createComment)
    const [comments, setComments] = useState([])
    const dispatch = useDispatch()
    const scrollableDivRef = useRef(null);
    const params = useParams()
    const basket = localStorage.getItem("OrderBasket")
    const findAvailableSize = (sizes) => {
        const availableSize = Object.entries(sizes).find(([size, quantity]) => quantity > 0);
        return availableSize ? availableSize[0] : "ناموجود";
    };
    const getData = async () => {
        const res = await readSingleProductService(params.id)
        setProduct(res.data.products)
        dispatch(setCreateComment({ ...createComment, idOfProduct: res.data.products._id }))
        setSelectedImage(res.data.products.mainPicture)
        setSimulorProducts(res.data.simularProducts)
        setComments(res.data.comments)
        // if (selectedSize == ""){
        //     setSize(findAvailableSize(res.data.products.sizes))
        // }
        if (basket) {
            const parsedBasket = JSON.parse(basket)
            const productInBasket = parsedBasket.find(item => item.id === res.data.products._id && item.size === selectedSize)
            if (productInBasket) {
                setProductCount(productInBasket.count)
            } else {
                setProductCount(0)
            }
        }
    }
    useEffect(() => {
        getData()
    }, [location, productCount, selectedSize])
    const refreshPage = async()=>{
        const res = await readSingleProductService(params.id)
        setSize(findAvailableSize(res.data.products.sizes));
    }
    useEffect(() => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollTop = 0; // اسکرول به بالا
        }
        refreshPage()  
    }, [location]);
    const handelAddProductToBasket = () => {
        const basket = localStorage.getItem("OrderBasket")
        if (basket) {
            const parstedBasket = JSON.parse(basket)
            localStorage.setItem("OrderBasket", JSON.stringify([...parstedBasket, { id: product._id, name: product.name, count: 1, size: selectedSize, colorName: product.colorName, colorCode: product.colorCode, price: product.price, discount: product.discount, image: product.mainPicture }]))
        } else {
            localStorage.setItem("OrderBasket", JSON.stringify([{ id: product._id, name: product.name, count: 1, size: selectedSize, colorName: product.colorName, colorCode: product.colorCode, price: product.price, discount: product.discount, image: product.mainPicture }]))
        }
        setProductCount((prevCount) => prevCount + 1);
    }
    const handleIncreaseProductCount = () => {
        // افزایش تعداد محصول در state و ذخیره در localStorage
        const updatedCount = productCount + 1;
        setProductCount(updatedCount);

        // بروزرسانی localStorage
        const basket = JSON.parse(localStorage.getItem("OrderBasket") || "[]");
        const productIndex = basket.findIndex(item => item.id === product._id && item.size === selectedSize);

        if (productIndex !== -1) {
            basket[productIndex].count = updatedCount;
            localStorage.setItem("OrderBasket", JSON.stringify(basket));
        }
    };
    const handleDecreaseProductCount = () => {
        // کاهش تعداد محصول در state و ذخیره در localStorage
        if (productCount > 1) {
            const updatedCount = productCount - 1;
            setProductCount(updatedCount);

            // بروزرسانی localStorage
            const basket = JSON.parse(localStorage.getItem("OrderBasket") || "[]");
            const productIndex = basket.findIndex(item => item.id === product._id && item.size === selectedSize);

            if (productIndex !== -1) {
                basket[productIndex].count = updatedCount;
                localStorage.setItem("OrderBasket", JSON.stringify(basket));
            }
        }
    };

    const handleRemoveProduct = () => {
        // حذف محصول از سبد خرید
        setProductCount(0);

        // بروزرسانی localStorage
        const basket = JSON.parse(localStorage.getItem("OrderBasket") || "[]");
        const updatedBasket = basket.filter(item => !(item.id === product._id && item.size === selectedSize));
        localStorage.setItem("OrderBasket", JSON.stringify(updatedBasket));
    };
    return (
        <>
            <Header />
            <div ref={scrollableDivRef} style={{ height: "calc(100vh - 144px)" }} className='overflow-y-scroll overflow-x-hidden w-screen scrollbar-hidden px-6 lg:px-20 pt-6'>
                <div className='flex flex-col sm:flex-row sm:m-5 gap-5 w-full'>
                    <div className="flex w-full flex-col-reverse sm:w-1/2 gap-3 max-w-full overflow-hidden">
                        {/* تصاویر کوچک */}
                        <div className="flex w-full gap-2 ">
                            {[product?.mainPicture, ...(product?.otherPictures || [])]?.map((pic, index) => (
                                <img
                                    key={index}
                                    src={uploadsURL + pic}
                                    alt="Product Thumbnail"
                                    className={`w-1/4 h-24 cursor-pointer rounded border-2 
                                    ${selectedImage === pic ? "border-blue-600" : "border-gray-300"}`}
                                    onClick={() => setSelectedImage(pic)}
                                    onError={(e) => (e.target.src = "/fallback-image.jpg")} // مدیریت خطای بارگذاری تصویر
                                />
                            ))}
                        </div>
                        {/* تصویر اصلی */}
                        <img
                            className="rounded shadow-sm object-cover w-full h-full "
                            src={uploadsURL + selectedImage}
                            alt="Product Image"
                            onError={(e) => (e.target.src = "/fallback-image.jpg")}
                        />
                    </div>
                    <div className='flex flex-col sm:gap-0.5 sm:py-2 md:gap-3 md:justify-evenly sm:w-1/2'>
                        <div className='mt-0 flex justify-between px-1'>
                            <h1 className='text-xl lg:text-4xl font-vazirmatn text-neutral-800 font-medium'>{product?.name}</h1>
                            <div className='flex items-center gap-1'>
                                <StarIcon />
                                <p className='text-xs lg:text-base font-vazirmatn '>4.1</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-4 mx-2'>
                            <p className='text-base lg:text-xl font-vazirmatn font-medium text-neutral-800'>رنگ :</p>
                            <div className='flex gap-1 items-center'>
                                <ColorButton color={product?.colorCode} />
                                <p className='text-sm lg:text-xl font-vazirmatn font-semibold text-neutral-700'>{product?.colorName}</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-2 mt-4 mx-2'>
                                <p className='text-base lg:text-xl font-vazirmatn font-medium text-neutral-800'>سایز :</p>
                                <h2 className='text-lg lg:text-lg font-vazirmatn font-medium text-neutral-800'>{selectedSize}</h2>
                            </div>
                            <div className='flex gap-2 mr-5 my-2 flex-wrap gap-y-2'>
                                {product?.sizes &&
                                    Object.entries(product.sizes)
                                        .filter(([_, count]) => count > 0)
                                        .map(([size, _]) => (
                                            <SizeButton
                                                key={size}
                                                click={() => setSize(size)}
                                                size={size}
                                                color={size == selectedSize ? "#44DCAE" : "#000"}
                                            />
                                        ))
                                }
                            </div>
                        </div>
                        <div>
                            <h5 className='text-sm lg:text-xl font-vazirmatn font-medium text-neutral-800 mt-3 mb-4 mr-2'>مشخصات</h5>
                            <div className='flex gap-2 flex-wrap mr-3'>
                                <ProductAttrebute attrebut="جنس" value={product?.type} />
                                <ProductAttrebute attrebut="استایل" value={product?.style} />
                                <ProductAttrebute attrebut="برند" value={product?.brand} />
                                <ProductAttrebute attrebut="فاق" value={product?.fagh} />
                                <ProductAttrebute attrebut="ضخامت" value={product?.thickness} />
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className='text-sm sm:text-base md:text-xl lg:text-2xl  font-vazirmatn font-medium text-neutral-800 mt-3 mb-4 mr-2'>محصولات مشابه</h5>
                <div className='flex flex-shrink-1 overflow-x-scroll gap-4 scrollbar-hide mb-2'>
                    {
                        simulorProducts && simulorProducts.map((product) => (
                            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                                <ProductCard click={() => { }} name={product.name} price={product.price} image={product.mainPicture} starRank="4.1" link="" />
                            </div>
                        )
                        )}
                </div>
                <h5 className='text-sm sm:text-base md:text-xl lg:text-2xl font-vazirmatn font-medium text-neutral-800 mt-3 mb-4 mr-2'>نظرات</h5>
                <div className='flex overflow-x-scroll scrollbar-hidden mb-3 gap-2'>
                    {comments.length > 0 ? comments.map((comment) => (
                        <Comment name={comment.name} rating={comment.rating} title={comment.title} desc={comment.desc} date={comment.createdAt} />
                    )) : (<div className='h-32 w-full flex justify-center items-center font-vazirmatn text-slate-900'>نظری برای این محصول یافت نشد</div>)}

                </div>
                <h5 className='text-sm sm:text-base md:text-xl lg:text-2xl font-vazirmatn font-medium text-neutral-800 mt-3 mb-4 mr-2'>ثبت نظر</h5>
                <CreatComment />
            </div>
            <div className='flex px-6 lg:px-20 items-center h-16 shadow-inner py-2'>
                <div className="grow">
                    {
                        productCount == 0 ? <PrimaryButton text="افزودن به سبد خرید" click={handelAddProductToBasket} /> : (<div className='flex gap-2 items-center py-2 px-4 border w-fit rounded-lg'>
                            <button onClick={handleIncreaseProductCount}><PlusIcon /></button>
                            <p>{productCount}</p>
                            {productCount == 1 ? <button onClick={handleRemoveProduct}><TrashIcon /></button> : <button onClick={handleDecreaseProductCount}><MinesIcon /></button>}
                        </div>)
                    }
                </div>
                {
                    product?.discount ? (<div className='flex-col flex items-end'>
                        <div className='flex items-center'>
                            <span className=' px-2 py-1 bg-red-500 text-white text-xs rounded ml-2'>{product?.discount} %</span>
                            <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light lg:font-medium text-slate-600'>تومان</p>
                            <h2 className='mr-1 line-through font-vazirmatn font-semibold text-base md:text-xl lg:text-base text-slate-600'>{product?.price ? new Intl.NumberFormat('fa-IR').format(product.price) : "۰"}</h2>
                        </div>
                        <div className='flex items-center'>
                            <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light lg:font-medium text-slate-900'>تومان</p>
                            <h2 className='mr-1 font-vazirmatn font-semibold text-base md:text-xl lg:text-2xl text-slate-900'>{product?.price ? new Intl.NumberFormat('fa-IR').format(product.price * (100 - product.discount) / 100) : "۰"}</h2>
                        </div>
                    </div>) : (<div className='flex items-center'>
                        <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light lg:font-medium text-slate-900'>تومان</p>
                        <h2 className='mr-1 font-vazirmatn font-semibold text-base md:text-xl lg:text-2xl text-slate-900'>{product?.price ? new Intl.NumberFormat('fa-IR').format(product.price) : "۰"}</h2>
                    </div>)
                }
            </div>
        </>
    )
}

export default Product