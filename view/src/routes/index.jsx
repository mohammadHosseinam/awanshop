import Basket from "../pages/basket/index.jsx";
import ComplitOrder from "../pages/complitOrder/index.jsx";
import CreatProduct from "../pages/creatProduct/index.jsx";
import  Home  from "../pages/home/index.jsx";
import Login from "../pages/login/index.jsx";
import Product from "../pages/product/index.jsx";
import SignIn from "../pages/signin/index.jsx";
import SuccessPayment from "../pages/successPayment/index.jsx";

export const routes = {
    home:{
        id:'1',
        path:'/',
        element:<Home/>
    },
    Product:{
        id:"2",
        path:"/product",
        element:<Product/>
    },
    login:{
        id:"3",
        path:"/login",
        element:<Login/>
    },
    signIn:{
        id:"4",
        path:"/signIn",
        element:<SignIn/>
    },
    complitOrder:{
        id:"5",
        path:"/complitOrder",
        element:<ComplitOrder/>
    },
    creatProduct:{
        id:"6",
        path:"/creatProduct",
        element:<CreatProduct/>
    },
    successPayment:{
        id:"7",
        path:"/successPayment",
        element:<SuccessPayment/>
    },
    basket:{
        id:"8",
        path:"/basket",
        element:<Basket/>
    },
    
}