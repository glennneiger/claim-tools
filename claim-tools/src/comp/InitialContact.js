import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';


class InitialContact extends Component {
    state ={
        firstContactMade: false,
        firstContactNotMade: false,
        subroSpoliationLanguage: false,
        adjusterContactLine: false,
        requestDocs: false,
        propertyType: null
    }

    signature = `Thank you,

Matt

Matthew Peters
Senior Examiner - Property Claims
Greater New York Mutual Insurance
200 Madison Avenue - Floor 3
New York, New York 10016`;

    subroSpoliationLanguage = `We ask that you save any evidence from the loss so we may inspect it for possible subrogation.`;

    adjusterContactLine = `I've also copied the outside adjuster, ${this.props.claimData ? this.props.claimData.adjusterContact : 'NAME NOT FOUND'} (${this.props.claimData ? this.props.claimData.adjusterNumber : 'NUMBER NOT FOUND'}) to this email. If you have not already, please contact them to set up an inspection time`;

    requestDecs = `When you have a moment, could you please forward the ${this.state.propertyType === 'condo' ? 'Condominium By-laws' : 'Proprietary Lease'} for my review?`;

    contactNotMadeEmailBody = `${ this.props.claimData ? this.props.claimData.insuredContact : 'name not found'},
This is Matthew Peters from Greater New York Mutual Insurance, the examiner assigned to this case at the home office. I've left a message for you earlier regarding this loss. When you have a moment, please contact me at the information below so we can discuss the case.

${this.state.subroSpoliationLanguage ? this.subroSpoliationLanguage : ''}

${this.state.adjusterContactLine ? this.adjusterContactLine : ''}

${this.signature}`;

    contactMadeEmailBody = `${ this.props.claimData ? this.props.claimData.insuredContact : 'name not found'},

This is Matthew Peters from Great New York. It was a pleasure speaking with you earlier. Below is my contact information. Please save it in case you and questions or concerns in the future.`;

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
                        value={ this.contactNotMadeEmailBody }
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