import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <p className="text-center">This is an electronics website created by Bahriddin Boltayev</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;