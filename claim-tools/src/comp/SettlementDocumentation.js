import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class SettlementDocumentation extends Component {
    state ={

    }
    deleteComma = (value) => {
        return value.replace(',', '');
    }

    formatCurrency = (value) => {       //https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript 04.27.19
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    render(){

        const mitigationitOutstanding = `Please note, this figure does not account for mitigation services. If professional services responded, please forward their estimate for review.`;

        const settlementEmail = `${ this.props.claimData ? this.props.claimData.insuredContact : 'name not found'},

This is Matthew Peters from Greater New York Mutual Insurance. I wanted to forward you the figures from our Adjuster() which outlined our pending payment.

${this.props.claimData.depreciation ? 'Actual Cash Value ("ACV")' : 'Replacement Cost Value ("RCV")'} Settlement Breakdown:

${this.props.claimData.rebuildEstimateSource ? this.props.claimData.depreciationSource : ''} Replacement Cost Estimate: $${this.props.claimData.rcv ? this.formatCurrency(this.props.claimData.rcv) : 'not found'}
${this.props.claimData.estimateLineItems[0] ? this.props.claimData.estimateLineItems.map( (item) => { return `${Object.keys(item)}: $${this.formatCurrency(Number(Object.values(item)))}
` }).join('') : ''}
Replacement Cost Total Value: $${this.props.claimData.rcvTotal ? this.formatCurrency(this.props.claimData.rcvTotal) : 'not found'}
${this.props.claimData.depreciation ? `Less ${this.props.claimData.depreciationSource ? this.props.claimData.depreciationSource : ''} Depreciation Hold-Back: ($${this.props.claimData.depreciation ? this.formatCurrency(this.props.claimData.depreciation) : 'not found'})
Actual Cash Value Total: $${this.props.claimData.acvTotal ? this.formatCurrency(this.props.claimData.acvTotal) : 'not found'}

` : ``}Less Deductible: ($${this.props.claimData.deductible ? this.formatCurrency(this.props.claimData.deductible) : 'not found'})
${this.props.claimData.depreciation ? 'ACV' : 'RCV'} Payment: $${this.props.claimData.payment ? this.formatCurrency(this.props.claimData.payment) : 'not found'}

Thanks!

Matt

Matthew Peters
Senior Examiner - Property Claims
Greater New York Mutual Insurance
200 Madison Avenue - Floor 3
New York, New York 10016`;  //this looks like a mess only because of the formatting issues with back-ticks

        const settlementNote = `${this.props.claimData.depreciation ? 'Actual Cash Value ("ACV")' : 'Replacement Cost Value ("RCV")'} Settlement Breakdown:

${this.props.claimData.rebuildEstimateSource ? this.props.claimData.depreciationSource : ''} Replacement Cost Estimate: $${this.props.claimData.rcv ? this.formatCurrency(this.props.claimData.rcv) : 'not found'}
${this.props.claimData.estimateLineItems[0] ? this.props.claimData.estimateLineItems.map( (item) => { return `${Object.keys(item)}: $${this.formatCurrency(Number(Object.values(item)))}
` }).join('') : ''}
Replacement Cost Total Value: $${this.props.claimData.rcvTotal ? this.formatCurrency(this.props.claimData.rcvTotal) : 'not found'}
${this.props.claimData.depreciation ? `Less ${this.props.claimData.depreciationSource ? this.props.claimData.depreciationSource : ''} Depreciation Hold-Back: ($${this.props.claimData.depreciation ? this.formatCurrency(this.props.claimData.depreciation) : 'not found'})
Actual Cash Value Total: $${this.props.claimData.acvTotal ? this.formatCurrency(this.props.claimData.acvTotal) : 'not found'}

` : ``}Less Deductible: ($${this.props.claimData.deductible ? this.formatCurrency(this.props.claimData.deductible) : 'not found'})
${this.props.claimData.depreciation ? 'ACV' : 'RCV'} Payment: $${this.props.claimData.payment ? this.formatCurrency(this.props.claimData.payment) : 'not found'}`;

        return (
            <section className="settlement-email-view">
                <Form>
                    <Form.Group
                        controlId="contactEmailBody">
                    <Form.Group
                        controlId='emailBodyOptions'>
                        <Form.Check inline type="checkbox" label="Contact Made" />
                        <Form.Check inline type="checkbox" label="Spoliation Language" />
                        <Form.Check inline type="checkbox" label="Adjuster Contact" />
                        <Form.Check inline type="checkbox" label="Request Governing Docs" />
                    </Form.Group>
                    <Tabs defaultActiveKey="settlementNote" id="uncontrolled-tab-example">
                    <Tab eventKey="settlementNote" title="Note">
                    <Form.Control
                        size='sm'
                        as="textarea"
                        rows='20'
                        value={ settlementNote }
                    />
                    <ClipIcon
                        fieldId='contactEmailBody'
                    />
                    </Tab>
                    <Tab eventKey="settlementEmail" title="Email">
                    <Form.Control
                        size='sm'
                        as="textarea"
                        rows='20'
                        value={ settlementEmail }
                    />
                    <ClipIcon
                        fieldId='contactEmailBody'
                    />
                    </Tab>
                    </Tabs>
                    </Form.Group>
                </Form>
            </section>
        );
    }
}

export default SettlementDocumentation;