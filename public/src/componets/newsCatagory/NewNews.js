import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NewNews = () => {

    const { newNews } = useSelector(state => state.news)


    if (!newNews) {
        return <h1>Cargando</h1>
    }

    return (
        <div className='mb-3 mt-4'>
            <div className='title-header'>
                <h2 className='title-header-h'>
                    <Link to='/' >NUEVAS NOTICIAS</Link>
                </h2>
            </div>
            <div className='row mt-4'>
                {
                    newNews.map(news => (
                        <div className='col-lg-4 col-sm-6 mb-2' key={news._id}>
                            <article>
                                <div className='article-img'>
                                    <img className='img-fluid' src={news.url} alt=''></img>
                                </div>
                                <div className='article-content'>
                                    <Link to={news.categoria.nombre} className='category' >{news.categoria.nombre}</Link>
                                    <h2 className='article-left__impact-title mt-1'>

                                        <Link to={`/${news.categoria.nombre}/${news.urlNoticia}`} className='title-right' >{news.titulo}</Link>
                                    </h2>
                                </div>
                            </article>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default NewNews