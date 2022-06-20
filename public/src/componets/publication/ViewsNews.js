import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getViewNews } from '../../actions/newsCategory'
import parse from 'html-react-parser'
import moment from 'moment'
import 'moment/locale/es'



const ViewsNews = () => {


    const dispatch = useDispatch()

    const { url } = useParams()

    useEffect(() => {
        dispatch(getViewNews(url))

    }, [dispatch, url])

    const { activeNews } = useSelector(state => state.news)


    if (!activeNews) {
        return <h2> Cargando</h2>
    }
    return (
        <div className='view-news mb-5'>
            <article>
                <h1>{activeNews.titulo}</h1>
                <div className='mb-3 fecha-view'>
                    <i className="bi bi-calendar4-week ms-2 "></i>
                    <span className='ms-1' >{moment(activeNews.fecha).format('LL')}</span>
                </div>
                <div className='mb-4'>
                    <img src={activeNews.url} alt={activeNews.urlNoticia} />
                </div>
                <div>
                    {parse(activeNews.cuerpo)}
                </div>
            </article>


        </div>
    )
}

export default ViewsNews