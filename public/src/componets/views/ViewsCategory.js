import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es'
import parse from 'html-react-parser'

const ViewsCategory = ({ news }) => {


    return (

        <div className='row mb-5 views-category' key={news._id}>
            <div className='col-md-6 col-sm-12'>
                <div className=' news-img'>
                    <img src={news.url} alt='' />
                </div>
            </div>

            <div className='col-md-6 col-sm-12 news-text'>
                <div className='news-titulo mb-3'>
                    <h2>
                        <Link to={`/${news.categoria.nombre}/${news.urlNoticia}`} className='title-right' >{news.titulo}</Link>

                    </h2>
                </div>
                <div className='mb-3 fecha-view'>
                    <i className="bi bi-calendar4-week ms-2 "></i>
                    <span className='ms-1' >{moment(news.fecha).format('LL')}</span>
                </div>
                <div>
                    <span className='news-body'>
                        {parse(news.cuerpo)}
                        {/* <Link to={`/${news.categoria.nombre}/${news.urlNoticia}`} className='title-right' >
                        </Link> */}

                    </span>
                </div>
            </div>
        </div>
    )
}

export default ViewsCategory