import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { startRegister } from '../../actions/auth'

const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
}

const RegisterScreen = () => {


    const dispatch = useDispatch()

    const [data, setData] = useState(initialState)
    const [msgError, setMsgError] = useState(false)

    const HandleSubmit = (e) => {

        e.preventDefault()
        if (isFormValid()) {
            setMsgError(false)
            dispatch(startRegister(data.name, data.email, data.password))
        }
    }

    const isFormValid = () => {
        if (data.name.trim().length === 0) {
            setMsgError('El nombre es requerido')
            return false
        }
        if (!validator.isEmail(data.email)) {
            setMsgError('El correo no es valido')
            return false
        }
        if (data.password !== data.password2 || data.password.length < 5) {
            setMsgError('El password o correo son incorrectos')
            return false
        }
        return true
    }


    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
                <h3>Registro</h3>

                <form className='container mt-3' onSubmit={HandleSubmit}>

                    {msgError &&

                        <div className='alert-error'>{msgError}</div>
                    }

                    <div className="mb-3">
                        <label className="form-label">Nombre:</label>
                        <input
                            type="nombre"
                            name="name"
                            autoComplete="off"
                            className="form-control"
                            placeholder='Juan'
                            value={data.name}
                            onChange={e => setData({ ...data, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Correo electronico:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder='correo@correo.com'
                            value={data.email}
                            onChange={e => setData({ ...data, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="*********"
                            value={data.password}
                            onChange={e => setData({ ...data, password: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Repetir Contraseña:</label>
                        <input
                            type="password"
                            name="password2"
                            className="form-control"
                            placeholder="*********"
                            value={data.password2}
                            onChange={e => setData({ ...data, password2: e.target.value })}
                        />
                    </div>
                    <button type="submit"
                        className="btn btn-primary btn-block mb-3"
                    // disabled={loading}
                    >Registrar</button>
                </form>
                <Link className='link' to='/auth/login'>Inicia sesión</Link>
            </div>
        </div>
    )
}

export default RegisterScreen