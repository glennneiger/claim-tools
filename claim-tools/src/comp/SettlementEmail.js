import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';


function SettlementEmail (props) {
        return (
            <section className="settlement-email-view">
                <Form>
                    <Form.Group
                        controlId="contactEmailBody">
                    <Form.Label>Settlement Email Body</Form.Label>
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