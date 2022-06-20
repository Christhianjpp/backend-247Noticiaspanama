import { types } from "../types/types"

const initialState = {
    impacto: [],
    newNews: [],
    categoryNews: null,
    activeNews: null,

}
export const newsCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.startNewsImpacto:
            return {
                ...state,
                impacto: [
                    action.payload.firstNews,
                    action.payload.restNews
                ]
            }
        case types.startNewNews:
            return {
                ...state,
                newNews: [
                    ...action.payload
                ]
            }
        case types.startCategoryNews:
            return {
                ...state,
                total: action.payload.total,
                categoryNews: [
                    ...action.payload.news
                ]
            }
        case types.startActiveCategoryNews:
            return {
                ...state,
                activeNews: action.payload
            }
        default:
            return state
    }
}