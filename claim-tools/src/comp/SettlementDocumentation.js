import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import ClipIcon from './ClipIcon';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class SettlementDocumentation extends Component {
    state ={
        mitigationitOutstanding: false,
        depreciationOpen: false,
        depreciationOriginalSpecs: false,
        deductibleChange: false
    }

    toggleMitigationOutstanding = () => {

        if(this.state.mitigationOutstanding === false){
            this.setState({
                mitigationOutstanding: true
            })
        } else {
            this.setState({
                mitigationOutstanding: false
            })
        }
    }

    toggleDepreciationOpen = () => {

        if(this.state.depreciationOpen === false){
            this.setState({
                depreciationOpen: true
            })
        } else {
            this.setState({
                depreciationOpen: false
            })
        }
    }

    toggleDepreciationOrigSpecs = () => {

        if(this.state.depreciationOriginalSpecs === false){
            this.setState({
                depreciationOriginalSpecs: true
            })
        } else {
            this.setState({
                depreciationOriginalSpecs: false
            })
        }
    }

    toggleDeductibleChange= () => {

        if(this.state.deductibleChange === false){
            this.setState({
                deductibleChange: true
            })
        } else {
            this.setState({
                deductibleChange: false
            })
        }
    }

    deleteComma = (value) => {
        return value.replace(',', '');
    }

    formatCurrency = (value) => {       //https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript 04.27.19
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    render(){

        const mitigationitOutstanding = `Please note, this figure does not account for mitigation services. If professional services responded, please forward their estimate for review.`;

        const depreciationOpen = `The depreciation hold-back will be released once work has been completed and proof of your incurred expense has been reviewed.`;

        const depreciationOriginalSpecs = `We are aware some units may contain betterment and improvements. As you may know, the master policy insurance is responsible for original builders/sponsors specifications, and our ${ this.props.claimData.rebuildEstimateSource === 'Independent Adjuster' ? 'adjuster' : 'builder consultant' } has written their estimate for such. Please note, the depreciation hold-back will be released when/if the property is repaired back to original builders grade specifications by the insured, and proof of the incurred expense by the insured has been reviewed.`;

        const deductibleChange = `Since this loss was the result of a [input data logic], we have used your package enhancement form [input data logic] to afford coverage. With this additional coverage, your deductible changed from [original deductible] to [new deductible], for losses resulting from [cause] only.`;

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
            { this.props.claimData.submitted ?
                <Form>
                <Form.Group
                    controlId="contactEmailBody">
                <Form.Group
                    controlId='emailBodyOptions'>
                    <Form.Check inline type="checkbox" label="Mitigation Pending" id="mitigationPending" onChange={ this.toggleChoice }/>
                    <Form.Check inline type="checkbox" label="Depreciation Open" />
                    <Form.Check inline type="checkbox" label="Depreciation OrigSpec" />
                    <Form.Check inline type="checkbox" label="Deductible Change" />
                </Form.Group>
                <Tabs defaultActiveKey="settlementNote" id="uncontrolled-tab-example">
                <Tab eventKey="settlementNote" title="Note">
                <Form.Control
                    size='sm'
                    as="textarea"
                    rows='20'
                    value={ this.props.claimData.submitted ? settlementNote : '' }
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
                    value={ this.props.claimData.submitted ? settlementEmail : '' }
                />
                <ClipIcon
                    fieldId='contactEmailBody'
                />
                </Tab>
                </Tabs>
                </Form.Group>
            </Form>
            : '' }
            </section>
        );
    }
}

export default SettlementDocumentation;