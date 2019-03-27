import React, { Component } from 'react';
import ExistingClaim from './ExistingClaim';
import ViewWindow from './ViewWindow';
//import NewClaim from './NewClaim';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    insuredContact: yup.string().required(),
    insuredNumber: yup.number().required(),
    insuredEmail: yup.string().email().required(),
    brokerContact: yup.string().required(),
    brokerNumber: yup.number().required(),
    brokerEmail: yup.string().email().required(),
    insuredAddress: yup.string().required(),
    brokerAddress: yup.string().required(),
    policyForms: yup.string().required(),
    dateOfLoss: yup.date().required(),
    policyNumber: yup.string().required()
});

function NewClaim () {
    return (
        <Formik
            validationSchema={ schema }
            onSubmit={ console.log }
            initialValues={{

            }}
        >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
            <Form
                noValidate
                onSubmit={ handleSubmit }
            >
                <Form.Row>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Date of Loss</Form.Label>
                            <Form.Control
                                size='sm'
                                type="date"
                                placeholder="Date of Loss"
                                name="dateOfLoss"
                                value={ values.dateOfLoss }
                                onChange={ handleChange }
                                isValid={ touched.dateOfLoss && !errors.dateOfLoss }
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a date</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Policy Number</Form.Label>
                            <Form.Control
                                size='sm'
                                type="text"
                                placeholder="Policy Number"
                                name="policyNumber"
                                value={ values.policyNumber }
                                onChange={ handleChange }
                                isValid={ touched.policyNumber && !errors.policyNumber }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid number</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Loss Location</Form.Label>
                        <Form.Control
                            size='sm'
                            type="text"
                            placeholder="Loss Location Address"
                            name="lossLocation"
                            value={ values.lossLocation }
                            onChange={ handleChange }
                            isValid={ touched.lossLocation && !errors.lossLocation }
                            />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide a valid name</Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Insured Contact</Form.Label>
                            <Form.Control
                                size='sm'
                                type="text"
                                placeholder="Insured Contact"
                                name="insuredContact"
                                value={ values.insuredContact }
                                onChange={ handleChange }
                                isValid={ touched.insuredContact && !errors.insuredContact }
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid name</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Insured Contact Number</Form.Label>
                            <Form.Control
                                size='sm'
                                type="text"
                                placeholder="numbers only.. we'll format"
                                name="insuredNumber"
                                value={ values.insuredNumber }
                                onChange={ handleChange }
                                isValid={ touched.insuredNumber && !errors.insuredNumber }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid number</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Insured Contact Email</Form.Label>
                            <Form.Control
                                size='sm'
                                type="email"
                                placeholder="type email"
                                name="insuredEmail"
                                value={ values.insuredEmail }
                                onChange={ handleChange }
                                isValid={ touched.insuredEmail && !errors.insuredEmail }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid email</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Broker Contact</Form.Label>
                            <Form.Control
                                size='sm'
                                type="text"
                                placeholder="Broker Contact"
                                name="brokerContact"
                                value={ values.brokerContact }
                                onChange={ handleChange }
                                isValid={ touched.brokerContact && !errors.brokerContact }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid name</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Broker Contact Number</Form.Label>
                            <Form.Control
                                size='sm'
                                type="text"
                                placeholder="numbers only.. we'll format"
                                name="brokerNumber"
                                value={ values.brokerNumber }
                                onChange={ handleChange }
                                isValid={ touched.brokerNumber && !errors.brokerNumber }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid number</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Broker Contact Email</Form.Label>
                            <Form.Control
                                size='sm'
                                type="email"
                                placeholder="type email"
                                name="brokerEmail"
                                value={ values.brokerEmail }
                                onChange={ handleChange }
                                isValid={ touched.brokerEmail && !errors.brokerEmail }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid email</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Insured Address</Form.Label>
                            <Form.Control
                                size='sm'
                                as="textarea"
                                rows='4'
                                placeholder="Insured Address"
                                name="insuredAddress"
                                value={ values.insuredAddress }
                                onChange={ handleChange }
                                isValid={ touched.insuredAddress && !errors.insuredAddress }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid address</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Broker Address</Form.Label>
                            <Form.Control
                                size='sm'
                                as="textarea"
                                rows='4'
                                placeholder="Address"
                                name="brokerAddress"
                                value={ values.brokerAddress }
                                onChange={ handleChange }
                                isValid={ touched.brokerAddress && !errors.brokerAddress }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid address</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Forms</Form.Label>
                    <Form.Control
                        size='sm'
                        as="textarea"
                        rows='7'
                        placeholder="Forms"
                        name="policyForms"
                        value={ values.policyForms }
                        onChange={ handleChange }
                        isValid={ touched.policyForms && !errors.policyForms }
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide a valid policy forms</Form.Control.Feedback>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit">
                    Submit
                </Button>
            </Form>
        )}
        </Formik>
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
                        <Form.Control size="sm" type="text" placeholder="Enter claim #" />
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