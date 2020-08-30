import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

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

            <Col className='offset-md-1' style={{ backgroundColor: '#fff', width: '43vw', height: '50vh', 
                marginTop: '-20rem' }}>
                
                <div className='p-3 d-flex flex-column justify-content-around' style={{ height: '100%' }}>
                    <h3>List your restaurant on Foody</h3>

                    <div>
                        <p className='mt-4'>Would you like thousands of new customers to taste your amazing
                        food? So would we!
                        </p>

                        <p>
                            It's simple: we list your menu online, help you process orders, pick
                            them up, and deliver them to hungry pandas - in a heartbeat!
                        </p>

                        <p>
                            Interested? Let's start our partnership today
                        </p>
                    </div>

                    <div className='d-flex flex-row justify-content-end'>
                        <Button className='px-5' 
                            style={{ backgroundColor: '#ed441a', borderRadius: 0, border: '0px' }}>
                            GET STARTED
                        </Button>
                    </div>
                </div>
                
            </Col>
        </Container>
    );
}