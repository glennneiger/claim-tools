import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';


class InitialContact extends Component {
    state ={
        contactMade: false,
        subroSpoliationLanguage: true,
        adjusterContactLine: true,
        requestDocs: true,
        propertyType: null
    }

    toggleContactMade = () => {
        if(this.state.contactMade === false){
            this.setState({
                contactMade: true
            });
        } else {
            this.setState({
                contactMade: false
            })
        }
    }

    toggleSpoliation = () => {
        if(this.state.subroSpoliationLanguage === false){
            this.setState({
                subroSpoliationLanguage: true
            });
        } else {
            this.setState({
                subroSpoliationLanguage: false
            })
        }
    }

    toggleAdjusterContact = () => {
        if(this.state.adjusterContactLine === false){
            this.setState({
                adjusterContactLine: true
            });
        } else {
            this.setState({
                adjusterContactLine: false
            })
        }
    }

    toggleRequestDocs = () => {
        if(this.state.requestDocs === false){
            this.setState({
                requestDocs: true
            });
        } else {
            this.setState({
                requestDocs: false
            })
        }
    }

    render(){
/* Email Body Optional Text */
        const signature = `Thank you,

Matt

Matthew Peters
Senior Examiner - Property Claims
Greater New York Mutual Insurance
200 Madison Avenue - Floor 3
New York, New York 10016`;

        const subroSpoliationLanguage = `We ask that you save any evidence from the loss so we may inspect it for possible subrogation.

`;

        const adjusterContactLine = `I've also copied the outside adjuster, ${this.props.claimData ? this.props.claimData.adjusterContact : 'NAME NOT FOUND'} (${this.props.claimData ? this.props.claimData.adjusterNumber : 'NUMBER NOT FOUND'}) to this email. If you have not already, please contact them to set up an inspection time.

`;

        const requestDocs = `When you have a moment, could you please forward the ${this.state.propertyType === 'condo' ? 'Condominium By-laws' : 'Proprietary Lease'} for my review?

`;

/* Contact Not Made Email Body */

        const contactNotMadeEmailBody = `${ this.props.claimData ? this.props.claimData.insuredContact : 'name not found'},

This is Matthew Peters from Greater New York Mutual Insurance, the examiner assigned to this case at the home office. I've left a message for you earlier regarding this loss. When you have a moment, please contact me at the information below so we can discuss the case.

${this.state.subroSpoliationLanguage ? subroSpoliationLanguage : ''}${this.state.requestDocs ? requestDocs : ''}${this.state.adjusterContactLine ? adjusterContactLine : ''}
${signature}`;

/* Contact Made Email Body */

        const contactMadeEmailBody = `${ this.props.claimData ? this.props.claimData.insuredContact : 'name not found'},

This is Matthew Peters from Great New York. It was a pleasure speaking with you earlier. Below is my contact information. Please save it in case you and questions or concerns in the future.

${this.state.subroSpoliationLanguage ? subroSpoliationLanguage : ''}${this.state.requestDocs ? requestDocs : ''}${this.state.adjusterContactLine ? adjusterContactLine : ''}
${signature}`;

        return (
            <Form>
                <h4>Initial Contact Email</h4>
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
                <Form.Group
                    controlId="contactEmailSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        value={ `Contact Email - GNY Claim: ${ this.props.claimNumber ? this.props.claimNumber : 'Claim Not Found' } - ${ this.props.claimData ? this.props.claimData.insuredName : 'Insured Name Not Found' } - Location: ${ this.props.claimData ? this.props.claimData.insuredAddress : 'Address Not Found' }`}
                        />
                    <ClipIcon
                        fieldId='contactEmailSubject'
                    />
                </Form.Group>
                <Form.Group
                    controlId="contactEmailBody">
                    <Form.Label>Email Body</Form.Label>
                        <Form.Group
                            controlId='emailBodyOptions'>
                            <Form.Check inline type="checkbox" label="Contact Made" />
                            <Form.Check inline type="checkbox" label="Spoliation Language" />
                            <Form.Check inline type="checkbox" label="Adjuster Contact" />
                            <Form.Check inline type="checkbox" label="Request Governing Docs" />
                        </Form.Group>
                    <Form.Control
                        size='sm'
                        as="textarea"
                        rows='7'
                        value={ this.state.contactMade ? contactMadeEmailBody : contactNotMadeEmailBody }
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