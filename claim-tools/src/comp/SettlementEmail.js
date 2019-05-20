import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';


function SettlementEmail (props) {
    const signature = `Thanks!

    Matt
    
    Matthew Peters
    Senior Examiner - Property Claims
    Greater New York Mutual Insurance
    200 Madison Avenue - Floor 3
    New York, New York 10016`;


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

export default SettlementEmail;