import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent';
import './Home.css';

export default function Home() {
    return(
        <Container style={{ maxWidth: '100vw' }} className='px-0' expand='md' fluid>
            <HeaderComponent />

            <Container className='bgContainer' fluid>
            </Container>

            <Col className='offset-md-1 my-5' sm={12} md={11}>
                <h3>
                    We'll deliver it, just prepare the food
                </h3>
            </Col>

            <Container className='restaurantService' fluid>

            </Container>
        </Container>
    );
}