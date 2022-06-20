import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"


export const startNewsImpacto = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchSinToken('buscar/noticiasporetiqueta/62a79f65f519aaac959329e1')
            const body = await resp.json()


            const [firstNews, ...restNews] = body.results[0]

            if (body.results) {
                dispatch(addNewsImpacto(firstNews, restNews))
            }


        } catch (error) {
            console.log(error)
        }
    }
}

const addNewsImpacto = (firstNews, restNews) => ({
    type: types.startNewsImpacto,
    payload: {
        firstNews, restNews
    }
})
export const startNewNews = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchSinToken('noticias')
            const body = await resp.json()
            if (body.ok) {
                dispatch(addNewNews(body.noticias))
            }


        } catch (error) {
            console.log(error)
        }
    }
}

const addNewNews = (news) => ({
    type: types.startNewNews,
    payload: news
})


export const startCategoryNews = (id, desde) => {
    return async (dispatch) => {

        const resp = await fetchSinToken(`buscar/categoriayetiqueta/${id}?desde=${desde}`)
        const body = await resp.json()


        const [total, news] = body.results

        if (body.results) {
            dispatch(categoryNews(news, total))
        }
    }
}

const categoryNews = (news, total) => ({
    type: types.startCategoryNews,
    payload: {
        news,
        total
    }
})

export const getViewNews = (urlNoticia) => {
    return async (dispatch, getState) => {

        const { categoryNews } = getState().news


        if (categoryNews) {
            const news = await categoryNews.find(news => (
                news.urlNoticia === urlNoticia

            ))
            if (news) {
                return dispatch(addActiveNewsCategory(news))
            }

        }
        const resp = await fetchSinToken(`noticias/${urlNoticia}`)
        const body = await resp.json()

        if (body.ok) {
            return dispatch(addActiveNewsCategory(...body.noticia))

        }

    }
}

const addActiveNewsCategory = (news) => ({
    type: types.startActiveCategoryNews,
    payload: news
})