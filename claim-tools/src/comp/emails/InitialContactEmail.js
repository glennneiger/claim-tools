import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ClipIcon from '../ClipIcon';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class InitialContactEmail extends Component {
    state ={
        contactMade: false,
        subroSpoliationLanguage: false,
        adjusterContactLine: false,
        requestDocs: false,
        propertyType: null // have it read the INS name and judge
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
${this.props.signature}`;

/* Contact Made Email Body */

        const contactMadeEmailBody = `${ this.props.claimData ? this.props.claimData.insuredContact : 'name not found'},

This is Matthew Peters from Great New York. It was a pleasure speaking with you earlier. Below is my contact information. Please save it in case you and questions or concerns in the future.

${this.state.subroSpoliationLanguage ? subroSpoliationLanguage : ''}${this.state.requestDocs ? requestDocs : ''}${this.state.adjusterContactLine ? adjusterContactLine : ''}
${this.props.signature}`;

        return (
            <Form>
                <Form.Group
                    controlId="contactEmailBody">
                    <Form.Label>Email Body</Form.Label>
                        <Form.Group
                            controlId='emailBodyOptions'>
                            <Form.Check inline type="checkbox" label="Contact Made" onChange={ this.toggleContactMade }/>
                            <Form.Check inline type="checkbox" label="Spoliation Language" onChange={ this.toggleSpoliation } />
                            <Form.Check inline type="checkbox" label="Adjuster Contact" onChange={ this.toggleAdjusterContact }/>
                            <Form.Check inline type="checkbox" label="Request Governing Docs" onChange={ this.toggleRequestDocs }/>
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

export default InitialContactEmail;