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