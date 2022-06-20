import { types } from "../types/types"

const initialState = {
    labels: []
}

export const labelReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.startLabelLoad:
            return {
                labels: [
                    ...action.payload
                ]
            }


        default:
            return state
    }
}