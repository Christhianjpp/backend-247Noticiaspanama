import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { startLogin } from '../../actions/auth'
const initialState = {
    email: "",
    password: ""
}


const LoginScreen = () => {

    const dispatch = useDispatch()

    const [data, setData] = useState(initialState)
    const [msgError, setMsgError] = useState(false)

    const HandleSubmit = (e) => {

        e.preventDefault()
        if (isFormValid()) {
            setMsgError(false)
            dispatch(startLogin(data.email, data.password))
        }
    }

    const isFormValid = () => {
        if (!validator.isEmail(data.email)) {
            setMsgError('El correo no es valido')
            return false
        }
        if (data.password.length < 5) {
            setMsgError('El password o correo son incorrectos')
            return false
        }

        return true
    }

    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
                <h3>Inicia sesión</h3>

                {
                    msgError &&
                    <div className='alert-error'>{msgError}a</div>
                }


                <form className='container mt-3' onSubmit={HandleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Correo electronico:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder='correo@correo.com'
                            value={data.email}
                            // onChange={(e) => console.log(e.target.value)}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
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
                    <button type="submit"
                        className="btn btn-primary btn-block mb-3"
                    // disabled={loading}
                    >Inicia sesión</button>

                </form>



                <Link className='link' to='/auth/register'
                >Crea una cuenta</Link>
            </div>
        </div>
    )
}

export default LoginScreen