import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import { newsLogout } from "./newsAdmin"

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('auth', { email, password }, 'POST')
        const body = await resp.json()

        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
        }

        dispatch(login({
            name: body.name,
            uid: body.uid
        }))
    }
}


export const startRegister = (name, email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('auth/new', { name, email, password }, 'POST')
        const body = await resp.json()

        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
        }

        dispatch(login({
            name: body.name,
            uid: body.uid
        }))
    }
}


export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('auth/renew')
        const body = await resp.json()

        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch(login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            console.log('finish')
            dispatch(checkingFinish())
        }
    }
}

const checkingFinish = () => ({
    type: types.checkingFinish
})

const login = (user) => ({
    type: types.login,
    payload: user
})

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch(newsLogout())
        dispatch(logout())
    }
}

const logout = () => ({
    type: types.logout
})

