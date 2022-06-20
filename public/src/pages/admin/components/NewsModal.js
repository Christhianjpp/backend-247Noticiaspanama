import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { clearActive, startNewNews, startNewsUpdate } from '../../../actions/newsAdmin';


const initialState = {
    titulo: '',
    cuerpo: '',
    categoria: '',
    estado: false,
    url: '',
    etiquetas: '',
    urlNoticia: ''
}



const NewsModal = ({ isOpen, close, categories, labels }) => {

    const { active: newsActive } = useSelector(state => state.newsAdmin)



    const dispatch = useDispatch()

    const [formError, setFormError] = useState(false)
    const [imgBase64, setImgBase64] = useState(null)
    const [dataForm, setDataForm] = useState(initialState)

    const [checkedLabelState, setCheckedLabelState] = useState([])


    useEffect(() => {

        setCheckedLabelState(new Array(labels.length).fill(false))

    }, [labels, close])


    useEffect(() => {

        if (newsActive) {

            const position = []
            const arrayState = new Array(labels.length).fill(false)

            newsActive.etiquetas.forEach((etiqueta) => { // paso a un array los id de las etiquetas
                position.push(etiqueta.uid)
            })

            const checkedLabels = arrayState.map((label, index) =>
                position.includes(index) ? true : false)

            setCheckedLabelState(checkedLabels)


        }


    }, [newsActive, labels])



    useEffect(() => {
        // agrega la nota activa al formulario
        if (newsActive) {
            setDataForm(newsActive)

        }


    }, [newsActive])

    const transforUrl = (text) => {
        const url = text.replace(" ", "-");
        return url.toLowerCase()
    }

    // Checked Label

    const handleOnChange = (position) => {
        const updateCheckedState = checkedLabelState.map((label, index) =>
            index === position ? !label : label)

        setCheckedLabelState(updateCheckedState)
        const labelTrue = []

        updateCheckedState.reduce((asd, currentState, index) => {

            if (currentState === true) {
                return labelTrue.push(labels[index])
            }
            return asd
        }, 0)
        setDataForm({ ...dataForm, etiquetas: labelTrue })
        console.log(labelTrue)
    }


    //Img
    const handleFileChange = (e) => {

        const [file] = e.target.files
        console.log(file)

        const SIZE_50MB = 1500000
        if (file.size > SIZE_50MB) {
            return setFormError('Imagen muy grande, máximo 1.5MB    ')
        } else {
            setFormError(false)
        }
        const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
        if (!isNameOfOneImageRegEx.test(file.name)) {
            return setFormError('Solo puede subir Imagenes')
        } else {
            setFormError(false)
        }

        // File al estado del formulario
        setDataForm({ ...dataForm, url: file })

        // base64
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = () => {
            setImgBase64(reader.result)
        }
    }


    const handleSave = () => {

        dispatch(startNewNews(dataForm))
        setDataForm(initialState)
        close()
    }

    const handleUpdate = () => {
        dispatch(startNewsUpdate(dataForm))
        setImgBase64(null)
        dispatch(clearActive())
        close()

    }

    const handleClose = () => {
        dispatch(clearActive())
        setDataForm(initialState)
        setImgBase64(null)
        close()
    }



    return (

        <Modal show={isOpen} onHide={handleClose}
            // fullscreen={true}
            size="lg"


        >
            <Modal.Header closeButton >
                <Modal.Title >Nueva Publicación </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Row >
                        {
                            formError &&
                            <span className='alert-error  text-center'>{formError}</span>
                        }

                        <Col>
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                size="sm"
                                name='titulo'
                                value={dataForm.titulo}

                                onChange={e => setDataForm({ ...dataForm, titulo: e.target.value })}
                            />
                        </Col>
                        <Col>
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                type="text"
                                size="sm"
                                name='urlNoticia'
                                value={dataForm.urlNoticia}
                                onChange={e => setDataForm({ ...dataForm, urlNoticia: transforUrl(e.target.value) })}

                            />
                        </Col>

                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <Form.Label>Categorías e Etiquetas</Form.Label>
                            <Form.Select size="sm"
                                value={dataForm.categoria}
                                name='categoria'
                                onChange={e => setDataForm({ ...dataForm, categoria: e.target.value })}
                            >
                                <option key='0' value='6257066e7bf1f08b6ff54e38' >Selecciona una categoría</option>
                                {
                                    categories.map(category => (
                                        <option key={category._id} value={category._id}>{category.nombre}</option>
                                    ))

                                }



                            </Form.Select>
                        </Col>
                        <Col>


                            {
                                labels.map((label, index) => (
                                    <Form.Check
                                        className='fs-label'
                                        inline
                                        type="checkbox"
                                        size='sm'
                                        label={label.nombre}
                                        name={label.nombre}
                                        key={label._id}
                                        checked={checkedLabelState[index]}

                                        // onChange={e => console.log(e.target.name)}
                                        onChange={() => handleOnChange(index)}
                                    />
                                ))

                            }

                        </Col>

                    </Row>
                    <Row className='mt-3'>

                        <Col>
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                type="file"
                                size='sm'
                                accept='.jpg, .jpeg, .png, gif'
                                onChange={handleFileChange}

                            />
                        </Col>

                        <Col>

                            {/* {
                                newsActive
                                    ? <Image src={dataForm.url} className="img-thumbnail" alt="..." />
                                    : <Image src={imgBase64} className="img-thumbnail" alt="..." />
                            } */}
                            {
                                imgBase64
                                    ? <Image src={imgBase64} className="img-thumbnail" alt="..." />
                                    : <Image src={dataForm.url} className="img-thumbnail" alt="..." />
                            }


                        </Col>

                    </Row>

                    <Col className='mt-3'>
                        <Form.Check
                            type="switch"
                            name='estado'
                            label='Activar'
                            checked={dataForm.estado}
                            onChange={() => setDataForm({ ...dataForm, estado: !dataForm.estado })}
                        />
                    </Col>


                    <Form.Group
                        className="mt-3"
                    >
                        <Editor
                            apiKey='your-api-key'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            initialValue={dataForm.cuerpo}
                            init={{
                                height: 300,
                                menubar: true,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar:

                                    "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help",

                                content_style: 'body {font - family:Helvetica,Arial,sans-serif; font-size:14px }',

                            }}
                            // onEditorChange={content => setDataForm({ ...dataForm, cuerpo: content })}
                            onBlur={e => setDataForm({ ...dataForm, cuerpo: e.target.getContent() })}
                        />
                    </Form.Group>



                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                {
                    newsActive
                        ? <Button variant="primary" onClick={handleUpdate}>Actualizar</Button>
                        : <Button variant="primary" onClick={handleSave}>Guardar </Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default NewsModal