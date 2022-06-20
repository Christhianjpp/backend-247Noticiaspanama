import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startCategoryNews } from '../../actions/newsCategory'
import Pagination from '../Pagination'
import ViewsCategory from '../views/ViewsCategory'


const Nacionales = () => {
    const dispatch = useDispatch()
    const [actualPage, setActualPage] = useState(1)

    const TOTAL_POR_PAGINA = 6
    const desde = (actualPage - 1) * TOTAL_POR_PAGINA

    useEffect(() => {
        dispatch(startCategoryNews('6255c75c9335f16f54bae5cc', desde))

    }, [dispatch, desde])

    const { categoryNews: newNews, total } = useSelector(state => state.news)


    const getTotalPages = () => {
        return Math.ceil(total / TOTAL_POR_PAGINA)
    }



    if (!newNews) {
        return <h2>Cargando</h2>
    }
    return (
        <div className='mt-3'>

            <div>

                {
                    newNews.map(news => (

                        <ViewsCategory key={news._id}
                            news={news}
                        />

                    ))
                }

                <div className='d-flex justify-content-center  mb-3'>
                    <Pagination page={actualPage} totalPages={getTotalPages()}
                        onChange={(pagina) => { setActualPage(pagina) }}
                    />
                </div>
            </div>


        </div>
    )
}

export default Nacionales