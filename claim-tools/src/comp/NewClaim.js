//https://react-bootstrap.github.io/components/forms/ 03.26.19

import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class NewClaim extends Component {
    state ={
        validated: false
    }

    handleSubmit(event) {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }

    render () {
        const { validated } = this.state;

        return (
            <section>
                <Form
                noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
                >
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Insured Contact</Form.Label>
                                <Form.Control required size='sm' type="text" placeholder="Insured Contact" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid name</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Insured Contact Number</Form.Label>
                                <Form.Control required size='sm' type="text" placeholder="numbers only.. we'll format" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid number</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Broker Contact</Form.Label>
                                <Form.Control required size='sm' type="text" placeholder="Insured Contact" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid name</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Broker Contact Number</Form.Label>
                                <Form.Control required size='sm' type="text" placeholder="numbers only.. we'll format" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid number</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Insured Address</Form.Label>
                                <Form.Control required size='sm' as="textarea" rows='4' placeholder="Insured Address" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid address</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Broker Address</Form.Label>
                                <Form.Control required size='sm' as="textarea" rows='4' placeholder="Address" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid address</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Forms</Form.Label>
                        <Form.Control required size='sm' as="textarea" rows='7' placeholder="Forms" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please provide a valid policy forms</Form.Control.Feedback>
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