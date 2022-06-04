import axios from "axios";

export const KATALOG_ALL_PRODUCT = "KATALOG_ALL_PRODUCT"
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
export const CHECKOUT_CART = "CHECKOUT_CART"
export const GET_USER_CART = "GET_USER_CART"

// export const getDataUser = (user) => {
export const katalogAllProduct = () => {
    return (dispatch) => {

        // loading
        dispatch({
            type: KATALOG_ALL_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        const access_token = localStorage.getItem('access_token')

        // get API
        axios({
            method: 'GET',
            url: 'http://localhost:3001/api/shop/katalog/all',
            timeout: 120000,
            headers: { 'access-token': access_token}
        })
            .then((response) => {
                // berhasil get API
                console.log('berhasil dapat data');
                dispatch({
                    type: KATALOG_ALL_PRODUCT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log('gagal dapat data');
                console.log(response);
                // gagal get API
                dispatch({
                    type: KATALOG_ALL_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.response.data.message
                    }
                })
            })

    }

}


// export const getDataUser = (user) => {
export const checkoutCart = (data) => {
    return (dispatch) => {

        // loading
        dispatch({
            type: CHECKOUT_CART,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        const access_token = localStorage.getItem('access_token')
        // console.log(data);
        // get API
        axios({
            method: 'POST',
            url: 'http://localhost:3001/api/shop/checkoutCart',
            timeout: 120000,
            headers: { 'access-token': access_token},
            data: data
        })
            .then((response) => {
                // berhasil get API
                console.log('berhasil dapat data');
                dispatch({
                    type: CHECKOUT_CART,
                    payload: {
                        loading: false,
                        data: true,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log('gagal dapat data');
                console.log(response);
                // gagal get API
                dispatch({
                    type: CHECKOUT_CART,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    }
                })
            })

    }

}

// export const getDataUser = (user) => {
export const addItemToCart = (data) => {
    return (dispatch) => {

        // loading
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        const access_token = localStorage.getItem('access_token')

        // get API
        axios({
            method: 'POST',
            url: 'http://localhost:3001/api/shop/addItemToCart',
            timeout: 120000,
            headers: { 'access-token': access_token},
            data: data
        })
            .then((response) => {
                // berhasil get API
                console.log('berhasil dapat data');
                dispatch({
                    type: ADD_ITEM_TO_CART,
                    payload: {
                        loading: false,
                        data: true,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log('gagal dapat data');
                console.log(response);
                // gagal get API
                dispatch({
                    type: ADD_ITEM_TO_CART,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    }
                })
            })

    }

}

// export const getDataUser = (user) => {
export const getUserCart = (ShoppingCartId) => {
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_USER_CART,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
                data: ShoppingCartId
            }
        })
        const access_token = localStorage.getItem('access_token')

        // get API
        axios({
            method: 'GET',
            url: 'http://localhost:3001/api/shop/checkout/',
            timeout: 120000,
            headers: { 'access-token': access_token}
        })
            .then((response) => {
                // berhasil get API
                console.log('berhasil dapat data');
                dispatch({
                    type: GET_USER_CART,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log('gagal dapat data');
                console.log(response);
                // gagal get API
                dispatch({
                    type: GET_USER_CART,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.response.data.message
                    }
                })
            })

    }

}

