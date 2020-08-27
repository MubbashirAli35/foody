import React from 'react';
import Container from 'react-bootstrap/Container';

import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent';
import './Home.css';

export default function Home() {
    return(
        <Container className='px-0' expand='md' fluid>
            <HeaderComponent />

            <Container className='bgContainer' fluid>
            </Container>
        </Container>
    );
}