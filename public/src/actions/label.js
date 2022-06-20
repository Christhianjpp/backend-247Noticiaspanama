import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"

export const startLabelLoad = () => {
    return async (dispatch) => {

        const resp = await fetchSinToken('etiqueta')
        const body = await resp.json()

        if (body.ok) {
            dispatch(labelLoad(body.etiquetas))
        }
    }
}

const labelLoad = (labels) => ({
    type: types.startLabelLoad,
    payload: labels
})