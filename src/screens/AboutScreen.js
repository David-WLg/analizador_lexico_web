import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import './AboutScreen.css'

const AboutScreen = () => {
    return (
        <div className='about'>
            <div>
                <Link to={'/'}>
                    <div>
                        <img src={Logo} height={'100px'} />
                    </div>
                </Link>
            </div>
           <div className='about__descripcion'>
               <p>
                El proyecto consiste en un analizador léxico capaz de recibir 
                como entrada programas pequeños en lenguaje C++.
               </p>
               <p>
                   Ademas guarda los resultados en una base de datos.
                   El usuario puede hacer consultas a las tablas creadas
                   en la base de datos.
               </p>
           </div>
        </div>
    )
}

export default AboutScreen