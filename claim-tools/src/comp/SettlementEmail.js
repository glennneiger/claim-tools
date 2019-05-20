import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';


class SettlementEmail extends Component {
    state ={

    }

    render(){

        const signature = `Thanks!

Matt

Matthew Peters
Senior Examiner - Property Claims
Greater New York Mutual Insurance
200 Madison Avenue - Floor 3
New York, New York 10016`;

        const settlementEmailOpening = `This is Matthew Peters from Greater New York Mutual Insurance. I wanted to forward you the figures from our Adjuster() which outlined our pending payment.`;

        const paymentDetails = `(ACV/RCV fx) Settlement Breakdown:
Replacement Cost Estimate: $
Replacement Cost Total Value: $

Less Depreciation Hold-Back: ($ )
Actual Cash Value Total: $

Less Deductible: ($ )
(ACV/RCV) Payment: $ `;

        const mitigationitOutstanding = `Please note, this figure does not account for mitigation services. If professional services responded, please forward their estimate for review.`;


        return (
            <section className="settlement-email-view">
                <Form>
                    <Form.Group
                        controlId="contactEmailBody">
                    <Form.Label>Settlement Email Body</Form.Label>
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
                        value={"Testing"}
                        />
                </Form.Group>
                <ClipIcon
                    fieldId='contactEmailBody'
                />
                </Form>
            </section>
        );
    }
}

export default SettlementEmail;