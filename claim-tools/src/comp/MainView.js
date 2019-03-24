import React, { Component } from 'react';
import ExistingClaim from './ExistingClaim';
import ViewWindow from './ViewWindow';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewClaim (props){
    return (
        <section>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Claim Number</Form.Label>
                    <Form.Control size='sm' type="text" placeholder="F06..." />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Named Insured</Form.Label>
                    <Form.Control size='sm' type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control size='sm' as="textarea" rows='4' placeholder="Address" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form.Group>
            </Form>
        </section>
    );
}

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
                            Claim options
                            <Tabs defaultActiveKey="newclaim" id="uncontrolled-tab-example">
                                <Tab eventKey="newclaim" title="new">
                                    <NewClaim />
                                </Tab>
                                <Tab eventKey="report1" title="report1">
                                    report 1
                                </Tab>
                                <Tab eventKey="report2" title="report2" disabled>
                                    report 2
                                </Tab>
                            </Tabs>
                        </section>
                    </Col>
                    <Col>
                        <section className='view-window'>
                            Data View Window
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