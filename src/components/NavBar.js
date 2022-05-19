import React from 'react'
import { Nav } from 'react-bootstrap'
import './NavBar.css'
import Logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <Nav
            className="justify-content-center navbar"
            onSelect={(selectedKey) => navigate(selectedKey)}
        >
            <div className='navbar__logo' >
                <img src={ Logo } height={'38px'}/>
            </div>

            <Nav.Item>
                <Nav.Link className='navbar__link' eventKey="/">Analizador</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navbar__link' eventKey="/query">Consultas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navbar__link' eventKey="/about">Acerca de</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar