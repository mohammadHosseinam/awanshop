import {mainInstance} from "../constants.js"

export const handelCreateProductService = async (data) => {
    const res = await mainInstance({
        method: 'post',
        url: '/creatProduct',
        data: data,
        headers: {'Content-Type': 'multipart/form-data' }
        })
    return res
}

export const readSingleProductService = async (productName) => {
    const res = await mainInstance.get(`/showProduct?productName=${productName}`)
    return res
}