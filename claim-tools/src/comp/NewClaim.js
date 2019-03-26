import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class NewClaim extends Component {
    state ={

    }

    render () {
        return (
            <section>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Insured Contact</Form.Label>
                                <Form.Control size='sm' type="text" placeholder="Insured Contact" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Insured Contact Number</Form.Label>
                                <Form.Control size='sm' type="text" placeholder="numbers only.. we'll format" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Broker Contact</Form.Label>
                                <Form.Control size='sm' type="text" placeholder="Insured Contact" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Broker Contact Number</Form.Label>
                                <Form.Control size='sm' type="text" placeholder="numbers only.. we'll format" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Insured Address</Form.Label>
                                <Form.Control size='sm' as="textarea" rows='4' placeholder="Insured Address" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Broker Address</Form.Label>
                                <Form.Control size='sm' as="textarea" rows='4' placeholder="Address" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Forms</Form.Label>
                        <Form.Control size='sm' as="textarea" rows='7' placeholder="Forms" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        );
    }
}


export default NewClaim;