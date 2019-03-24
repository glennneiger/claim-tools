import React, { Component } from 'react';
import NewClaim from './NewClaim';
import ExistingClaim from './ExistingClaim';
import ViewWindow from './ViewWindow';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class MainView extends Component {
    state ={

    }

    render() {
        return (
            <section className='main-view'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Claim Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter claim #" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            <Container>
                <Row>
                    <Col>
                        <section className='claim-window'>
                            Claim options window
                        </section>
                    </Col>
                    <Col>
                        <section className='view-window'>
                            <ViewWindow />
                        </section>
                    </Col>
                </Row>
            </Container>
            </section>
        );
    }
}

export default MainView;