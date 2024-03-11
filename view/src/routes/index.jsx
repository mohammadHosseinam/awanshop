import  Home  from "../pages/home/index.jsx";
import Product from "../pages/product/index.jsx";

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
}