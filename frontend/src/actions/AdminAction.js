import axios from "axios";

export const ADMIN_GET_ALL_PRODUCT = "ADMIN_GET_ALL_PRODUCT"
export const ADMIN_GET_ALL_ORDER = "ADMIN_GET_ALL_ORDER"

// export const getDataUser = (user) => {
export const adminGetAllProduct = () => {
    return (dispatch) => {

        // loading
        dispatch({
            type: ADMIN_GET_ALL_PRODUCT,
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
            url: 'http://localhost:3001/api/admins/products/lists',
            timeout: 120000,
            headers: { 'access-token': access_token}
        })
            .then((response) => {
                // berhasil get API
                console.log('berhasil dapat data');
                dispatch({
                    type: ADMIN_GET_ALL_PRODUCT,
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
                    type: ADMIN_GET_ALL_PRODUCT,
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
export const adminGetAllOrder = () => {
    return (dispatch) => {

        // loading
        dispatch({
            type: ADMIN_GET_ALL_ORDER,
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
            url: 'http://localhost:3001/api/admins/orders/lists',
            timeout: 120000,
            headers: { 'access-token': access_token}
        })
            .then((response) => {
                // berhasil get API
                console.log('berhasil dapat data');
                dispatch({
                    type: ADMIN_GET_ALL_ORDER,
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
                    type: ADMIN_GET_ALL_ORDER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.response.data.message
                    }
                })
            })

    }

}
