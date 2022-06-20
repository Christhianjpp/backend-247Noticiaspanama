import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"

export const startCategoryLoad = () => {
    return async (dispatch) => {

        const resp = await fetchSinToken('categoria')
        const body = await resp.json()

        if (body.ok) {
            dispatch(categoryload(body.categorias))
        }
    }
}

const categoryload = (categories) => ({
    type: types.startCategoryLoad,
    payload: categories
})