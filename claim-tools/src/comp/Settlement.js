import React, { Component } from 'react';
import SettlementDocumentation from './SettlementDocumentation';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({ //incomplete..complete before shipping
    rcv: yup.number().required(),
    //rcvTotal: yup.number().required(),
    depreciation: yup.number(),
    deductible: yup.number().required(),
});

function NewLineItem (props){ //Stateless FX for additional line items
    return(
            <InputGroup
                className="mb-3"
                size="sm" >
                <FormControl
                    aria-label="Line Item Name"
                    type="text"
                    placeholder="Enter $ Source"
                    name={ props.lineItemName }
                    value={ props.values}
                    onChange={ props.onChange }
                    onBlur={ props.onBlur}
                    isValid={ props.isValid }
                    />
                <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Amount (to the nearest dollar)"
                    type="number"
                    step="0.01" //https://stackoverflow.com/questions/14650932/set-value-to-currency-in-input-type-number 05.08.19
                    placeholder="Enter $ Amount"
                    name={ props.lineItemAmount }
                    value={ props.values }
                    onChange={ props.onChange }
                    onBlur={ props.onBlur}
                    isValid={ props.isValid }
                    />
            </InputGroup>
    )
}
class Settlement extends Component {
    state = {
 //will have to update another way
    }

    render() {
        let estimateLineItems = this.props.claimSettlementData.estimateLineItems;

        return (
            <section className='settlement-view'>
                <h4>Settlement Options</h4>
                <Container>
                    <Row>
                        <Col sm={true}>
                        <Formik
                            validationSchema={ schema }
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    this.props.updateValues(values);
                                    alert(JSON.stringify(values, null, 2)); //alert set to verify text submissions
                                    //this.updateCurrentClaimNumber(values.claimNumber);
                                    console.log(values)
                                    setSubmitting(false);
                                }, 400);
                            }}
                            initialValues={{
                                rcv: 10000.45,
                                depreciation: 1000.30,
                                deductible: 5000.00
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
                                onSubmit={ handleSubmit } >
                                <Form.Label>Settlement Inputs</Form.Label>
                                    <InputGroup
                                        className="mb-3"
                                        size='sm'
                                        >
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            //variant="outline-secondary"
                                            title={this.state.rebuildEstimateSource}
                                            id="input-group-dropdown-1" >
                                        <Dropdown.Item as="button" href="#" value='Independent Adjuster' onClick={ this.props.updateEstimateSource } >Independent Adjuster</Dropdown.Item>
                                        <Dropdown.Item as="button" href="#" value='Builder Consultant' onClick={ this.props.updateEstimateSource } >Builder Consultant</Dropdown.Item>
                                    </DropdownButton>
                                    <InputGroup.Prepend>
                                            <InputGroup.Text>RCV</InputGroup.Text>
                                            <InputGroup.Text>$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Amount (to the nearest dollar)"
                                            type="number"
                                            placeholder="Dollar Amount"
                                            name="rcv"
                                            value={ values.rcv }
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            isValid={ touched.rcv && !errors.rcv } />
                                    </InputGroup>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={ this.props.addLineItem }>
                                        Add Line Item
                                    </Button>
                                    {
                                        estimateLineItems.map((val, indx) => { //https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c 04.23.19
                                            return(
                                                <NewLineItem
                                                    key={indx}
                                                    aria-label="Line Item Name"
                                                    //placeholder={ props.name }
                                                    //name="newLineItem"
                                                    lineItemName={ `itemName${indx}` }
                                                    lineItemAmount={ `itemAmount${indx}` }
                                                    value={ values.newLineItem }
                                                    onChange={ handleChange }
                                                    onBlur={ handleBlur }
                                                    isValid={ touched.newLineItem && errors.newLineItem }
                                                />
                                            )
                                        })
                                    }
                                    <InputGroup
                                        className="mb-3"
                                        size="sm" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>RCV Total</InputGroup.Text>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Amount (to the nearest dollar)"
                                            type="number"
                                            placeholder="Addition FX dumps here"
                                            name="rcvTotal"
                                            value={ this.state.rcvTotal }
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            isValid={ touched.rcvTotal && !errors.rcvTotal } />
                                    </InputGroup>
                                    <InputGroup
                                        className="mb-3"
                                        size='sm'>
                                        <DropdownButton
                                        as={InputGroup.Prepend}
                                        //variant="outline-secondary"
                                        title={this.state.depreciationSource}
                                        id="input-group-dropdown-1" >
                                        <Dropdown.Item as="button" href="#" value='Independent Adjuster' onClick={ this.updateDepreciationSource } >Independent Adjuster</Dropdown.Item>
                                        <Dropdown.Item as="button" href="#" value='Builder Consultant' onClick={ this.updateDepreciationSource } >Builder Consultant</Dropdown.Item>
                                    </DropdownButton>
                                    <InputGroup.Prepend>
                                            <InputGroup.Text>Hold-Back</InputGroup.Text>
                                            <InputGroup.Text>$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Amount (to the nearest dollar)"
                                            type="number"
                                            placeholder="Depreciation Hold-Back"
                                            name="depreciation"
                                            value={ values.depreciation }
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            isValid={ touched.depreciation && !errors.depreciation } />
                                    </InputGroup>
                                    <InputGroup
                                        className="mb-3"
                                        size="sm" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>ACV Total</InputGroup.Text>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Amount (to the nearest dollar)"
                                            type="number"
                                            placeholder="Addition FX dumps here"
                                            name="acvTotal"
                                            value={ this.state.acvTotal }
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            isValid={ touched.acvTotal && !errors.acvTotal } />
                                    </InputGroup>
                                    <InputGroup
                                        className="mb-3"
                                        size="sm" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Less Deductible</InputGroup.Text>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Amount (to the nearest dollar)"
                                            type="number"
                                            placeholder="Deductible Amount"
                                            name="deductible"
                                            value={ values.deductible }
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            isValid={ touched.deductible && !errors.deductible } />
                                    </InputGroup>
                                    <InputGroup
                                        className="mb-3"
                                        size="sm" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Less PTD</InputGroup.Text>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Amount (to the nearest dollar)"
                                            type="number"
                                            placeholder="Paid to Date"
                                            name="paidToDate"
                                            value={ this.state.priorPayment ? this.state.priorPaymentTotal : values.paidToDate }
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            isValid={ touched.paidToDate && !errors.paidToDate } />
                                    </InputGroup>
                                    <InputGroup
                                        className="mb-3"
                                        size="sm" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>ACV/RCV Payment</InputGroup.Text>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Amount (to the nearest dollar)"
                                            type="number"
                                            placeholder="payment"
                                            name="payment"
                                            value={ this.state.payment }
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            isValid={ touched.payment && !errors.payment } />
                                    </InputGroup>
                                    <Button
                                        variant="primary"
                                        type="submit" >
                                        Update
                                    </Button>
                            </Form>
                    )}
                    </Formik>
                    </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Settlement;