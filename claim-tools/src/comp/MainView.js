import React, { Component } from 'react';

import NewClaim from './NewClaim';
import ViewWindow from './ViewWindow';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    claimNumber: yup.string().required(),
});
class MainView extends Component {
    state ={
        currentClaimNumber: null,
        currentClaimData: null
    }

    updateCurrentClaim = input => {
        this.setState({
            currentClaimData: input
        });
    }

    updateCurrentClaimNumber = input => {
        this.setState({
            currentClaimNumber: input
        });
    }

    render() {
        return (
            <section className='main-view'>
                <Formik
                    validationSchema={ schema }
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            this.updateCurrentClaimNumber(values.claimNumber);
                            setSubmitting(false);
                        }, 400);
                    }}
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
                        onSubmit={ handleSubmit }
                    >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search Claim</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Enter Claim #"
                                name="claimNumber"
                                value={ values.claimNumber }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                isValid={ touched.claimNumber && !errors.claimNumber }
                                />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
            )}
            </Formik>
            <section className='staged-claim'>
                <h2>Staged Claim:</h2>
                <p>Insured: {this.state.currentClaimData ? this.state.currentClaimData.insuredName : 'No claim Staged'}</p>
                <p>Claim Number: {this.state.currentClaimNumber ? this.state.currentClaimNumber : 'No Claim Staged'}</p>
                <p>Policy Number: {this.state.currentClaimData ? this.state.currentClaimData.policyNumber : 'No Claim Staged'}</p>
                <p>Date of Loss: {this.state.currentClaimData ? this.state.currentClaimData.dateOfLoss : 'No Claim Staged'}</p>

            </section>
            <Container>
                <Row>
                    <Col>
                        <section className='claim-window'>
                            Claim options
                            <Tabs defaultActiveKey="newclaim" id="uncontrolled-tab-example">
                                <Tab eventKey="newclaim" title="new">
                                    <NewClaim
                                        updateCurrentClaim={ this.updateCurrentClaim }
                                    />
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
                    {/*<Col>
                        <section className='view-window'>
                            Data View Window
                            <ViewWindow />
                        </section>
                    </Col>*/}
                    </Row>
            </Container>
        </section>
        );
    }
}

export default MainView;