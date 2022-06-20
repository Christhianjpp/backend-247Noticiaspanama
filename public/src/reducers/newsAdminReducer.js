import { types } from "../types/types"

const initialState = {
    news: [],
    total: null,
    active: null
}
export const newsAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.newsLoadedAdmin:
            return {
                ...state,
                total: action.payload.total,
                news: [
                    ...action.payload.news
                ]
            }
        case types.newsAddNew:
            return {
                ...state,
                news: [
                    action.payload,
                    ...state.news
                ]
            }

        case types.newsActive:
            return {
                ...state,
                active: action.payload
            }

        case types.newsClearActive:
            return {
                ...state,
                active: null
            }

        case types.newsUpdate:
            console.log(action.payload.id)
            console.log(action.payload.data)
            return {
                ...state,
                news: state.news.map(
                    news => news._id === action.payload.id
                        ? action.payload.data
                        : news
                )
            }
        case types.newsDelete:
            return {
                ...state,
                active: null,
                news: state.news.filter(news => news._id !== action.payload)

            }

        case types.newsLogout:
            return {
                ...initialState
            }
        default:
            return state
    }
}