import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';


class InitialContact extends Component {
    state ={

    }

    contactMadeEmailBody = `${ this.props.claimData ? this.props.claimData.insuredContact : 'name not found'},
Hi Asshole!
By Asshole!!`;

    render(){
        return (
            <Form>
                <h4>Initial Contact Email</h4>
                <Form.Group
                    controlId="emailContact">
                    <Form.Label>Email Contact</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        value={ this.props.claimData ? this.props.claimData.insuredEmail : 'No Email Found - Stage Claim'}
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
                        value={ `${ this.props.claimData ? this.props.claimData.adjusterEmail : 'No Email Found - Stage Claim' }; ${ this.props.claimData ? this.props.claimData.brokerEmail : 'No Email Found - Stage Claim' }`}
                        />
                    <ClipIcon
                        fieldId='emailCarbonCopy'
                    />
                </Form.Group>
                <Form.Group
                    controlId="contactEmailSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        value={ `Contact Email - GNY Claim: ${ this.props.claimNumber ? this.props.claimNumber : 'Claim Not Found - Stage Claim' } - ${ this.props.claimData ? this.props.claimData.insuredName : 'Insured Name Not Found - Stage Claim' } - Location: ${ this.props.claimData ? this.props.claimData.insuredAddress : 'Adress Not Found - Stage Claim' }`}
                        />
                    <ClipIcon
                        fieldId='contactEmailSubject'
                    />
                </Form.Group>
                <Form.Group
                    controlId="contactEmailBody">
                    <Form.Label>Email Body</Form.Label>
                    <Form.Control
                        size='sm'
                        as="textarea"
                        rows='7'
                        value={ this.contactMadeEmailBody }
                        />
                </Form.Group>
                <ClipIcon
                    fieldId='contactEmailBody'
                />
            </Form>
        )
    }
}

export default InitialContact;