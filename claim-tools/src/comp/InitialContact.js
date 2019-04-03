import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';


function InitialContact (props) {

    const contactEmailBody = `${ props.claimData ? props.claimData.insuredContact : 'name not found'},
Hi Asshole!
By Asshole!!`;

    return (
        <Form>
            <h4>Initial Contact Email</h4>
            <Form.Group
                controlId="emailContact">
                <Form.Label>Email Contact</Form.Label>
                <Form.Control
                    size="sm"
                    type="text"
                    value={ props.claimData ? props.claimData.insuredEmail : 'No Email Found - Stage Claim'}
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
                    value={ `${ props.claimData ? props.claimData.adjusterEmail : 'No Email Found - Stage Claim' }; ${ props.claimData ? props.claimData.brokerEmail : 'No Email Found - Stage Claim' }`}
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
                    value={ `Contact Email - GNY Claim: ${ props.claimNumber ? props.claimNumber : 'Claim Not Found - Stage Claim' } - ${ props.claimData ? props.claimData.insuredName : 'Insured Name Not Found - Stage Claim' } - Location: ${ props.claimData ? props.claimData.insuredAddress : 'Adress Not Found - Stage Claim' }`}
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
                    value={ contactEmailBody }
                    />
            </Form.Group>
            <ClipIcon
                fieldId='contactEmailBody'
            />
        </Form>
    )
}

export default InitialContact;