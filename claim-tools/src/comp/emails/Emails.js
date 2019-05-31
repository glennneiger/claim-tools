import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ClipIcon from '../ClipIcon';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import InitialContactEmail from './InitialContactEmail';
import SettlementEmail from './SettlementEmail';
class Emails extends Component {
    state ={
        contactMade: false,
        subroSpoliationLanguage: false,
        adjusterContactLine: false,
        requestDocs: false,
        propertyType: null // have it read the INS name and judge
    }

    render(){
/* Email Body Optional Text */
        const signature = `Thanks!

Matt

Matthew Peters
Senior Examiner - Property Claims
Greater New York Mutual Insurance
200 Madison Avenue - Floor 3
New York, New York 10016`;

        return (
            <Form>
                <h4>Email Templates</h4>
                <Form.Group
                    controlId="emailContact">
                    <Form.Label>Email Contact</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        value={ this.props.claimData ? this.props.claimData.insuredEmail : 'No Email Found'}
                        />
                    <ClipIcon
                        fieldId='emailContact'
                    />
                </Form.Group>
                <Form.Group
                    controlId="emailCarbonCopy">
                    <Form.Label>Carbon Copies</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        value={ `${ this.props.claimData ? this.props.claimData.adjusterEmail : 'No Email Found' }; ${ this.props.claimData ? this.props.claimData.brokerEmail : 'No Email Found' }`}
                        />
                    <ClipIcon
                        fieldId='emailCarbonCopy'
                    />
                </Form.Group>
                <Container>
                <Row>
                    <Col>
                        <section className='claim-window'>
                            Email Options
                            <Tabs defaultActiveKey="email-options" id="email-options">
                                <Tab eventKey="first-contact-email" title="First Contact">
                                    <InitialContactEmail
                                        claimData={ this.props.claimData }
                                        signature={ signature }
                                    />
                                </Tab>
                                <Tab eventKey="settlement-email" title="Settlement" disabled={ !this.props.claimSettlementData.submitted }>
                                    <SettlementEmail //need to add claimData && claimSettlementData respectivly
                                        claimData={ this.props.claimSettlementData }
                                        signature={ signature }
                                    />
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
            </Form>
        )
    }
}

export default Emails;