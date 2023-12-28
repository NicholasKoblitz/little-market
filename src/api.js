import axios from 'axios';

const FAKEAPI = 'https://fakestoreapi.com';



export const getAllProduct = async () => {
    const res = await axios({
        method: 'get',
        url: `${FAKEAPI}/products`
    })

    return res.data;
}

export const getProductsByCategory = async (category) => {
    const res = await axios({
        method: "get",
        url:`${FAKEAPI}/products/category/${category}`
    })
    console.log(res)

    return res.data;
}

export const getSingleProduct = async (productId) => {
    const res = await axios({
        method: 'get',
        url: `${FAKEAPI}/products/${productId}`
    })

    return res.data;
}

export const getSingleUser = async (userId) => {
    const res = await axios({
        method: 'get',
        url: `${FAKEAPI}/users/${userId}`
    })

    return res.data;
}

export const getUserCart = async (userId) => {
    const res = await axios({
        method: 'get',
        url: `${FAKEAPI}/carts`
    })

    for(let c in res.data) {
        if(res.data[c].userId === userId){
            return res.data[c].products
        }
    }
}