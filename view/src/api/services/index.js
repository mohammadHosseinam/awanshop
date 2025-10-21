import { mainInstance } from "../constants.js"

export const handelCreateProductService = async (data) => {
    const res = await mainInstance({
        method: 'post',
        url: '/creatProduct',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res
}

export const handelLoginService = async (data) => {
    const res = await mainInstance({
        method: 'post',
        url: '/login',
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
    return res
}

export const handelSignInService = async (data) => {
    const res = await mainInstance({
        method: 'post',
        url: '/signIn',
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
    return res
}


export const handelSignUpService = async (data) => {
    const res = await mainInstance({
        method: 'post',
        url: '/sendRegisterOTP',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res
}

export const handelVerifyOTPAndRegisterService = async (data) => {
    const res = await mainInstance({
        method: 'post',
        url: '/verifyOTPAndRegister',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res
}

export const readSingleProductService = async (productName) => {
    const res = await mainInstance.get(`/showProduct?productName=${productName}`)
    return res
}

export const handelCreateCommentService = async (data, Authorization) => {
    const res = await mainInstance({
        method: 'post',
        url: '/createComment',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": Authorization
        }
    })
    return res
}

export const handelCreateOrderService = async (data, Authorization) => {
    const res = await mainInstance({
        method: 'post',
        url: '/createOrder',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": Authorization
        }
    })
    return res
}

export const verifyPaymentService = async ({ authority , status , orderId }) => {
    
    console.log(authority, status, orderId)
    console.log(`/verify-payment?authority=${authority}&status=${status}&orderId=${orderId}`)
    const res = await mainInstance.get(`/verify-payment?authority=${authority}&status=${status}&orderId=${orderId}`);
    return res;
};


export const handelshowAllOrdersService = async (Authorization) => {
    const res = await mainInstance({
        method: 'get',
        url: '/showAllOrders',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": Authorization
        }
    })
    return res
}