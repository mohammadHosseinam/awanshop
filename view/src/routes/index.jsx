import AdminPanel from "../pages/admin/index.jsx";
import Basket from "../pages/basket/index.jsx";
import ComplitOrder from "../pages/complitOrder/index.jsx";
import CreatProduct from "../pages/creatProduct/index.jsx";
import  Home  from "../pages/home/index.jsx";
import Product from "../pages/product/index.jsx";
import SignIn from "../pages/signIn/index.jsx";
import SignUp from "../pages/signUp/index.jsx";
import SuccessPayment from "../pages/successPayment/index.jsx";
import VerifySignIn from "../pages/verifySignIn/index.jsx";
import VerifySignUp from "../pages/verifySignUp/index.jsx";

export const routes = {
    home:{
        id:'1',
        path:'/',
        element:<Home/>
    },
    Product:{
        id:"2",
        path:"/product/:id",
        element:<Product/>
    },
    signIn:{
        id:"3",
        path:"/SignIn",
        element:<SignIn/>
    },
    verifySignIn:{
        id:"4",
        path:"/VerifySignIn",
        element:<VerifySignIn/>
    },
    signUp:{
        id:"5",
        path:"/signUp",
        element:<SignUp/>
    },
    verifySignUp:{
        id:"6",
        path:"/VerifySignUp",
        element:<VerifySignUp/>
    },
    complitOrder:{
        id:"7",
        path:"/complitOrder",
        element:<ComplitOrder/>
    },
    creatProduct:{
        id:"8",
        path:"/creatProduct",
        element:<CreatProduct/>
    },
    successPayment:{
        id:"9",
        path:"/payment/verify",
        element:<SuccessPayment/>
    },
    basket:{
        id:"10",
        path:"/basket",
        element:<Basket/>
    },
    AdminPanel:{
        id:"11",
        path:"/adminPanel",
        element:<AdminPanel/>
    },
}