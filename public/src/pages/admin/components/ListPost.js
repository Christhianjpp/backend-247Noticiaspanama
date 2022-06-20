import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import moment from 'moment'

import 'moment/locale/es';


import { newsStartLoading, startNewsActive, startNewsDelete } from '../../../actions/newsAdmin'
import Pagination from '../../../componets/Pagination'

const ListPost = ({ openModal }) => {
    const dispatch = useDispatch()
    const { news, total } = useSelector(state => state.newsAdmin)


    const [actualPage, setactualPage] = useState(1)


    const TOTAL_POR_PAGINA = 10
    const desde = (actualPage - 1) * TOTAL_POR_PAGINA


    useEffect(() => {
        dispatch(newsStartLoading(desde))
    }, [desde, dispatch])

    const getTotalPages = () => {
        return Math.ceil(total / TOTAL_POR_PAGINA)
    }



    const handleEdit = (news) => {
        dispatch(startNewsActive(news))
        openModal()
    }

    const handleDelete = (id) => {

        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar la publicación!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Borrada!',
                    'La publicación ha sido borrada.',
                )
                dispatch(startNewsDelete(id))
            }
        })

    }

    if (!news) {
        return (<h4>Espere...</h4>)
    }
    return (
        <div className='table-responsive border'>
            <table className="table table-bordered table-striped"  >
                {/* <table className="table table-hover table-dark"> */}
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Borrador</th>
                        <th scope="col">Ver</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        news.map(news => (
                            <tr key={news._id}>
                                <td >{news.titulo}</td>
                                <td>{news.categoria.nombre}</td>
                                <td>{moment(news.fecha).format('L')}</td>
                                <td>{news.usuario.name}</td>
                                <td>
                                    {
                                        news.estado
                                            ? "Activa"
                                            : "Borrador"
                                    }
                                </td>
                                <td>
                                    <button className='btn btn-success'><i className="bi bi-eye"></i></button>
                                </td>
                                <td>

                                    <button className='btn btn-primary'
                                        onClick={() => handleEdit(news)}
                                    ><i className="bi bi-pencil"></i></button>
                                </td>
                                <td>

                                    <button className='btn btn-danger'
                                        onClick={() => handleDelete(news._id)}
                                    ><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <div className='d-flex justify-content-center  mb-3'>

                <Pagination page={actualPage} totalPages={getTotalPages()}
                    onChange={(pagina) => { setactualPage(pagina) }}
                />
            </div>
        </div>
    )
}

export default ListPost