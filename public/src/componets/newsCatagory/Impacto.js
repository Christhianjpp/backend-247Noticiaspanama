import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'


const Impacto = () => {


    const [firstNews, restNews] = useSelector(state => state.news.impacto)



    if (!firstNews) {
        return <span>cargando</span>
    }

    return (
        <div className='row'>
            <div className='col-lg-6 col-sm-12 mb-4'>
                <article className='article-left'>
                    <div className='article-left__img'>
                        <img className='img-fluid' src={firstNews.url} alt='' />
                    </div>
                    <div className='article-left__content mt-1'>
                        <Link to={firstNews.categoria.nombre} className='category' >{firstNews.categoria.nombre}</Link>
                        <h2 className='article-left__impact-title title-h mt-2'>

                            <Link to={`/${firstNews.categoria.nombre}/${firstNews.urlNoticia}`} >{firstNews.titulo}</Link>
                        </h2>
                        <span className='article-left__impact-body'>
                            {parse(firstNews.cuerpo)}
                        </span>
                    </div>
                </article>
            </div>
            <div className='col-lg-6 col-md-12'>
                <div className='row'>
                    {
                        restNews.map(news => (


                            <div className='col-sm-6 mb-sm-2 px-1' key={news._id}>
                                <article className='article-right'>
                                    <div className='article-right__img'>
                                        <img className='img-fluid' src={news.url} alt='' />
                                    </div>
                                    <div className='article-left__content mt-1'>
                                        <Link to={news.categoria.nombre} className='category' >{news.categoria.nombre}</Link>
                                        <h2 className='article-left__impact-title mt-1'>
                                            <Link to={`/${news.categoria.nombre}/${news.urlNoticia}`} className='title-right'>{news.titulo}</Link>
                                        </h2>

                                    </div>
                                </article>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Impacto