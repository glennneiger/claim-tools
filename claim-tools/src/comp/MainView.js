import React, { Component } from 'react';

import NewClaim from './NewClaim';
import ViewWindow from './ViewWindow';
import InitialContact from './InitialContact';
import Settlement from './Settlement';
import Misc from './Misc';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    claimNumber: yup.string().required(),
});
class MainView extends Component {
    state ={
        currentClaimNumber: null,
        currentClaimData: null,
        currentSettlementData: {
            rebuildEstimateSource: 'Source',
            depreciationSource: 'Source',
            estimateLineItems: [],
            submitted: false,
            deductible: null,
            depreciation: null,
            rcv: null,
            rcvTotal: null,
            acvTotal: null,
            payment: null,
            priorPayment: false,
            priorPaymentTotal: null
        }
    }

    updateCurrentClaim = input => {
        this.setState({
            currentClaimData: input
        });
    }

    updateCurrentClaimNumber = input => {
        this.setState({
            currentClaimNumber: input
        });
    }

    // String Formatting FX's //

    toTitleCase = (str) => {          //https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript 05.30.19
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    // Settlement Comp FX's //

    updatePaymentAmt = () => { //needs more work.. errors with toFixed.
        let payment = null;

        if (this.state.currentSettlementData.depreciation !== null){
            payment = this.state.currentSettlementData.acvTotal - this.state.currentSettlementData.deductible;
        } else {
            payment = this.state.currentSettlementData.rcvTotal - this.state.currentSettlementData.deductible;
        }

        this.setState({
            currentSettlementData:
            {
                ...this.state.currentSettlementData,
                payment: Number(payment.toFixed(2)),
                priorPayment: true
            }
        })
    }

    updateACV = () => {
        let acvTotal = null;

        if(this.state.currentSettlementData.depreciation === ''){
            acvTotal = null;
            this.setState({
                currentSettlementData:
                    {   ...this.state.currentSettlementData,
                        acvTotal: null
                    }
            })
        } else {
            acvTotal = this.state.currentSettlementData.rcvTotal - this.state.currentSettlementData.depreciation;

            this.setState({
                currentSettlementData:
                {
                    ...this.state.currentSettlementData,
                    acvTotal: Number(acvTotal.toFixed(2)),
                }
            })
        }
    }

    updateRCV = () => {    //tallies the estimate line items
        let estimateLineItems = this.state.currentSettlementData.estimateLineItems,
            objectified = Object.assign({}, ...estimateLineItems),
            rcvTotal = this.state.currentSettlementData.rcv;

        for(let obj in objectified){
            rcvTotal += objectified[obj];
        }

        this.setState({
            currentSettlementData:
            {
                ...this.state.currentSettlementData,
                rcvTotal: Number(rcvTotal.toFixed(2)),
            }
        })
    }

    updateEstimateSource = (event) => {
        event.preventDefault();

        this.setState({
            currentSettlementData:
            {
                ...this.state.currentSettlementData,
                rebuildEstimateSource: event.target.value
            }
        });
    }

    updateDepreciationSource = (event) => {
        event.preventDefault();

        this.setState({
            currentSettlementData:
            {
                ...this.state.currentSettlementData,
                depreciationSource: event.target.value
            }
        });
    }

    addLineItem = (event) => {
        event.preventDefault();

        this.setState((prevState) => ({
            currentSettlementData:
            {
                ...this.state.currentSettlementData,
                estimateLineItems: [...prevState.currentSettlementData.estimateLineItems, {source: "", amt: null}],
            }
        }));
    }

    filterLineItemKeys(arr, query) {    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 05/08/19
        return arr.filter(function(el) {
            return el[0].toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
    }

    formatLineItems = (values) => {     //converts the unformatted object data to an array of objects with correct "name" and "dollar amount"
        let formattedLineItems = [],
            entries = Object.entries(values),
            entryName = this.filterLineItemKeys(entries, 'itemName'),
            entryAmount =  this.filterLineItemKeys(entries, 'itemAmount');

            for(let x = 0; x < entryAmount.length; x += 1){ //pushes the correct amount (num) to the correct array
                for(let y = 0; y < entryName.length; y += 1){
                    if(entryName[y][0].indexOf(x.toString()) !== -1){
                        entryName[y].push(entryAmount[y][1])
                    }
                }
            }

            for(let x = 0; x < entryName.length; x += 1){
                let formattedObject = {};

                formattedObject[`${entryName[x][1]}`] = entryName[x][2];

                formattedLineItems.push(formattedObject);
            }

            return formattedLineItems;
    }

    updateValues = (values) => {

        let addtlLineItems = this.formatLineItems(values);

        if (values.depreciation === ''){
            values.depreciation = 0;
        }

        this.setState({
            currentSettlementData:
            {
                ...this.state.currentSettlementData,
                submitted: true,
                deductible: values.deductible,
                depreciation: values.depreciation,
                rcv: values.rcv,
                estimateLineItems: addtlLineItems
            }
        });

        this.updateRCV();
        this.updateACV();
        this.updatePaymentAmt();
    }


    render() {
        return (
            <section className='main-view'>
                <Formik
                    validationSchema={ schema }
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2)); //alert set to verify text submissions
                            this.updateCurrentClaimNumber(values.claimNumber);
                            setSubmitting(false);
                        }, 400);
                    }}
                    initialValues={{
                        claimNumber: 'F0689987'
                    }}
                >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form
                        onSubmit={ handleSubmit }
                    >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search Claim</Form.Label>
                            <Form.Control
                                size="sm"
                                type="search"
                                placeholder="Enter Claim #"
                                name="claimNumber"
                                value={ values.claimNumber }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                isValid={ touched.claimNumber && !errors.claimNumber }
                                />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
            )}
            </Formik>
            <section className='staged-claim'>
                <h2>Staged Claim:</h2>
                <p>Insured: {this.state.currentClaimData ? this.state.currentClaimData.insuredName : 'No claim Staged'}</p>
                <p>Claim Number: {this.state.currentClaimNumber ? this.state.currentClaimNumber : 'No Claim Staged'}</p>
                <p>Policy Number: {this.state.currentClaimData ? this.state.currentClaimData.policyNumber : 'No Claim Staged'}</p>
                <p>Date of Loss: {this.state.currentClaimData ? this.state.currentClaimData.dateOfLoss : 'No Claim Staged'}</p>

            </section>
            <Container>
                <Row>
                    <Col>
                        <section className='claim-window'>
                            Claim options
                            <Tabs defaultActiveKey="settlement" id="uncontrolled-tab-example">
                                <Tab eventKey="initialInfo" title="Initial Info">
                                    <NewClaim
                                        updateCurrentClaim={ this.updateCurrentClaim }
                                        toTitleCase={ this.toTitleCase }
                                    />
                                </Tab>
                                <Tab eventKey="firstContact" title="First Contact">
                                    <InitialContact
                                        claimNumber={ this.state.currentClaimNumber }
                                        claimData={ this.state.currentClaimData }
                                    />
                                </Tab>
                                <Tab eventKey="settlement" title="Settlement">
                                    <Settlement
                                        claimSettlementData={ this.state.currentSettlementData }
                                        updateValues={ this.updateValues }
                                        updateEstimateSource={ this.updateEstimateSource }
                                        addLineItem={ this.addLineItem }
                                    />
                                </Tab>
                                <Tab eventKey="noteTemplates" title="Notes">
                                    <Misc />
                                </Tab>
                                <Tab eventKey="emailTemplates" title="Emails">
                                    <Misc />
                                </Tab>
                            </Tabs>
                        </section>
                    </Col>
                    {/*<Col>
                        <section className='view-window'>
                            Data View Window
                            <ViewWindow />
                        </section>
                    </Col>*/}
                    </Row>
            </Container>
        </section>
        );
    }
}

export default MainView;