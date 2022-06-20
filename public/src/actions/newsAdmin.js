import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import uploadImage from "../helpers/fileCloudinary"
import { types } from "../types/types"

export const newsStartLoading = (desde) => {
    return async (dispatch) => {

        const resp = await fetchSinToken(`buscar/noticias?desde=${desde}`)
        const body = await resp.json()
        const [total, news] = body.results
        dispatch(newsLoaded(total, news))
    }
}


const newsLoaded = (total, news) => ({
    type: types.newsLoadedAdmin,
    payload: {
        total,
        news
    }
})



export const startNewNews = (news) => {
    return async (dispatch, getState) => {
        const usuario = getState().auth.uid

        const url = news.url
            ? await uploadImage(news.url)
            : ''


        const data = {
            ...news,
            url,
            usuario,
            // etiquetas: { ...news.etiquetas }

        }


        try {
            const resp = await fetchConToken('noticias', data, 'POST')
            const body = await resp.json()
            console.log(body)

            if (body.ok) {
                dispatch(addNews(body.noticia))
            }


        } catch (error) {
            console.log(error)

        }
    }
}

const addNews = (news) => ({
    type: types.newsAddNew,
    payload: news
})

export const startNewsActive = (news) => {
    return (dispatch) => {
        dispatch(startActive(news))
    }
}

const startActive = (news) => ({
    type: types.newsActive,
    payload: news
})


export const clearActive = () => ({
    type: types.newsClearActive
})


export const startNewsUpdate = (data) => {
    return async (dispatch) => {

        const url = data.url.name
            ? await uploadImage(data.url)
            : data.url

        const dataNew = {
            ...data,
            url,
            // etiquetas: { ...data.etiquetas }
        }

        const resp = await fetchConToken(`noticias/${data._id}`, dataNew, 'PUT')
        const body = await resp.json()
        console.log(body)
        console.log(dataNew)

        if (body.ok) {
            dispatch(newsUpdate(data._id, dataNew))
        }
    }
}

const newsUpdate = (id, data) => ({
    type: types.newsUpdate,
    payload: {
        id, data
    }
})



export const startNewsDelete = (id) => {
    return async (dispatch) => {

        const resp = await fetchConToken(`noticias/${id}`, {}, 'DELETE')
        const body = await resp.json()
        console.log(body)
        if (body.ok) {
            dispatch(newsDelete(id))

        }

    }
}
export const newsDelete = (id) => ({
    type: types.newsDelete,
    payload: id
})

export const newsLogout = () => ({
    type: types.newsLogout
})