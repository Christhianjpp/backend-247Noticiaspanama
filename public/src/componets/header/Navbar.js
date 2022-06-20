import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container barra'>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" >INICIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/nacionales' className="nav-link" >NACIONALES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/internacionales' className="nav-link" >INTERNACIONALES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/policivas' className="nav-link" >POLICIVAS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/deportes' className="nav-link" >DEPORTES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/farandula' className="nav-link" >FARÁNDULA</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/cienciaytecnologia' className="nav-link" >CIENCIA Y TECNOLOGÍA</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>


        </div>
    )
}

export default Navbar