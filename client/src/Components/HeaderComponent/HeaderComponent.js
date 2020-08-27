import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './HeaderComponent.css';

export default function HeaderComponent() {
    return(
        <Navbar fixed='top'>
            <Navbar.Brand>
                <h1 className='brand' >Foody</h1>
            </Navbar.Brand>
            <Nav>
                <Nav.Item className='mr-2'>
                    <Nav.Link className='link' style={{ color: '#000', paddingLeft: '1rem',
                        paddingRight: '1rem' }}>
                        <FontAwesomeIcon icon={faUser} className='mr-2'/>
                        LOGIN
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: '#000' }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}