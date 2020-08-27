import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './HeaderComponent.css';

export default function HeaderComponent() {
    return(
        <Navbar>
            <Navbar.Brand>
                <h1 className='brand' >Foody</h1>
            </Navbar.Brand>
        </Navbar>
    )
}