import React from 'react';
import Container from 'react-bootstrap/Container';

import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent';

export default function Home() {
    return(
        <Container expand='md' fluid>
            <HeaderComponent />
        </Container>
    );
}