import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer';
import { categoryReducer } from '../reducers/categoryReducer';
import { labelReducer } from '../reducers/labelReducer';
import { newsAdminReducer } from '../reducers/newsAdminReducer';
import { newsCategoryReducer } from '../reducers/newsCategoryReducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        newsAdmin: newsAdminReducer,
        category: categoryReducer,
        label: labelReducer,
        news: newsCategoryReducer,
    },
    middleware: [thunk]
})

