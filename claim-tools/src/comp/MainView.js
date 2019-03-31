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

class MainView extends Component {
    state ={
        currentClaim: null
    }

    updateCurrentClaim = input => {
        this.setState({
            currentClaim: input
        });
    }

    render() {
        return (
            <section className='main-view'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search Claim</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter Claim #" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
                <section className='staged-claim'>
                    <h2>Staged Claim:</h2>
                    <p>Insured: {this.state.currentClaim ? this.state.currentClaim.insuredName : 'No claim Staged'}</p>
                    <p>Claim Number: {this.state.currentClaim ? this.state.currentClaim.claimNumber : 'No Claim Staged'}</p>
                    <p>Policy Number: {this.state.currentClaim ? this.state.currentClaim.policyNUmber : 'No Claim Staged'}</p>
                    <p>Date of Loss: {this.state.currentClaim ? this.state.currentClaim.dateOfLoss : 'No Claim Staged'}</p>

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