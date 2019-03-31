//https://react-bootstrap.github.io/components/forms/ 03.26.19

import React, { Component } from 'react';//import NewClaim from './NewClaim';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    dateOfLoss: yup.date().required(),
    policyNumber: yup.string().required(),
    lossLocation: yup.string().required(),
    insuredContact: yup.string().required(),
    insuredNumber: yup.number().required(),
    insuredEmail: yup.string().email().required(),
    insuredAddress: yup.string().required(),
    brokerContact: yup.string().required(),
    brokerNumber: yup.number().required(),
    brokerEmail: yup.string().email().required(),
    brokerAddress: yup.string().required(),
    adjusterContact: yup.string(),
    adjusterNumber: yup.string(),
    adjusterEmail: yup.string(),
    policyForms: yup.string().required(),
});

function NewClaim (props) {
    return (
        <Formik
            validationSchema={ schema }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    props.updateCurrentClaim(values);
                    setSubmitting(false);
                }, 400);
            }}
            initialValues={{
                dateOfLoss: '03/15/1986',
                policyNumber: '1131M5678',
                lossLocation: '200 Madison Ave - New York, NY 10016',
                insuredContact: 'Mark J',
                insuredNumber: 4567890,
                insuredEmail: 'mp.legend@gmail.com',
                insuredAddress: '200 Madison Ave - New York, NY 10016',
                brokerContact: 'Mark J',
                brokerNumber:  4567890,
                brokerEmail: 'mp.legend@gmail.com',
                brokerAddress: '200 Madison Ave - New York, NY 10016',
                adjusterContact: 'Mark J',
                adjusterNumber:  4567890,
                adjusterEmail: 'mp.legend@gmail.com',
                policyForms: ';)'
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
                                onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
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
                            onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
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
                                onBlur={ handleBlur }
                                isValid={ touched.brokerAddress && !errors.brokerAddress }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid address</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Adjuster Contact</Form.Label>
                            <Form.Control
                                size='sm'
                                type="text"
                                placeholder="Adjuster Contact"
                                name="adjusterContact"
                                value={ values.adjusterContact }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                isValid={ touched.iadjusterContact && !errors.adjusterContact }
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid name</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Adjuster Contact Number</Form.Label>
                            <Form.Control
                                size='sm'
                                type="text"
                                placeholder="numbers only.. we'll format"
                                name="adjusterNumber"
                                value={ values.adjusterNumber }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                isValid={ touched.adjusterNumber && !errors.adjusterNumber }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid number</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Adjuster Contact Email</Form.Label>
                            <Form.Control
                                size='sm'
                                type="email"
                                placeholder="type email"
                                name="adjusterEmail"
                                value={ values.adjusterEmail }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                isValid={ touched.adjusterEmail && !errors.adjusterEmail }
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid email</Form.Control.Feedback>
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
                        onBlur={ handleBlur }
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

export default NewClaim;