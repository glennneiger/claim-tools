import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ClipIcon from '../ClipIcon';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Notes extends Component {

    deleteComma = (value) => {
        return value.replace(',', '');
    }

    formatCurrency = (value) => {       //https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript 04.27.19
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    render() {

        const settlementNote = `${this.props.claimSettlementData.depreciation ? 'Actual Cash Value ("ACV")' : 'Replacement Cost Value ("RCV")'} Settlement Breakdown:

${this.props.claimSettlementData.rebuildEstimateSource ? this.props.claimSettlementData.depreciationSource : ''} Replacement Cost Estimate: $${this.props.claimSettlementData.rcv ? this.formatCurrency(this.props.claimSettlementData.rcv) : 'not found'}
${this.props.claimSettlementData.estimateLineItems[0] ? this.props.claimSettlementData.estimateLineItems.map( (item) => { return `${Object.keys(item)}: $${this.formatCurrency(Number(Object.values(item)))}
` }).join('') : ''}
Replacement Cost Total Value: $${this.props.claimSettlementData.rcvTotal ? this.formatCurrency(this.props.claimSettlementData.rcvTotal) : 'not found'}
${this.props.claimSettlementData.depreciation ? `Less ${this.props.claimSettlementData.depreciationSource ? this.props.claimSettlementData.depreciationSource : ''} Depreciation Hold-Back: ($${this.props.claimSettlementData.depreciation ? this.formatCurrency(this.props.claimSettlementData.depreciation) : 'not found'})
Actual Cash Value Total: $${this.props.claimSettlementData.acvTotal ? this.formatCurrency(this.props.claimSettlementData.acvTotal) : 'not found'}

` : ``}Less Deductible: ($${this.props.claimSettlementData.deductible ? this.formatCurrency(this.props.claimSettlementData.deductible) : 'not found'})
${this.props.claimSettlementData.depreciation ? 'ACV' : 'RCV'} Payment: $${this.props.claimSettlementData.payment ? this.formatCurrency(this.props.claimSettlementData.payment) : 'not found'}`;

        return (
            <section className='notes-view'>
                <h4>Note Options</h4>
                <Form>
                <Form.Group
                    controlId="note-body">
                <Tabs defaultActiveKey="settlementNote" id="uncontrolled-tab-example">
                <Tab eventKey="settlementNote" title="Settlement">
                <Form.Control
                    size='sm'
                    as="textarea"
                    rows='20'
                    value={ this.props.claimSettlementData.submitted ? settlementNote : '' }
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

export default Notes;