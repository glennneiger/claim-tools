import React, { Component } from 'react';
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
    depreciation: yup.number().required(),
    deductible: yup.number().required(),
});

function newLineItem (props){
    return(
        <InputGroup
            className="mb-3"
            size="sm" >
            <FormControl
                aria-label="Amount (to the nearest dollar)"
                type="number"
                placeholder="Addition FX dumps here"
                name="rcvTotal"
                value={ this.values.rcvTotal }
                onChange={ this.handleChange }
                onBlur={ this.handleBlur }
                isValid={ this.touched.rcvTotal && !this.errors.rcvTotal } />
            <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                aria-label="Amount (to the nearest dollar)"
                type="number"
                placeholder="Addition FX dumps here"
                name="rcvTotal"
                value={ this.values.rcvTotal }
                onChange={ this.handleChange }
                onBlur={ this.handleBlur }
                isValid={ this.touched.rcvTotal && !this.errors.rcvTotal } />
        </InputGroup>
    )
}
class Settlement extends Component {
    state = {
        rebuildEstimateSource: 'Source',
        depreciationSource: 'Source',
        estimateLineItems: [{source: 'mitigation', amt: 1.00}]
    }

    updateEstimateSource = (event) => {
        this.setState({
            rebuildEstimateSource: event.target.value
        });
    }
    updateDepreciationSource = (event) => {
        this.setState({
            depreciationSource: event.target.value
        });
    }

    render() {
        let {estimateLineItems} = this.state.estimateLineItems;

        return (
            <section className='settlement-view'>
            <Formik
                    validationSchema={ schema }
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2)); //alert set to verify text submissions
                            //this.updateCurrentClaimNumber(values.claimNumber);
                            setSubmitting(false);
                        }, 400);
                    }}
                    initialValues={{
                        rcv: 3456.98,
                        depreciation: 6789.98,
                        deductible: 5000.00,
                        rcvTotal: 'RCV Total'
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
                        <h4>Settlement Options</h4>
                            <InputGroup
                                className="mb-3"
                                size='sm'
                                >
                                <DropdownButton
                                    as={InputGroup.Prepend}
                                    //variant="outline-secondary"
                                    title={this.state.rebuildEstimateSource}
                                    id="input-group-dropdown-1" >
                                <Dropdown.Item as="button" href="#" value='Independent Adjuster' onClick={ this.updateEstimateSource } >Independent Adjuster</Dropdown.Item>
                                <Dropdown.Item as="button" href="#" value='Builder Consultant' onClick={ this.updateEstimateSource } >Builder Consultant</Dropdown.Item>
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
                                    value={ values.rcvTotal }
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
                                    value={ values.acvTotal }
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
                                    value={ values.paidToDate }
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
                                    value={ values.payment }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    isValid={ touched.payment && !errors.payment } />
                            </InputGroup>
                            <Button
                                variant="primary"
                                type="submit" >
                                Generate
                            </Button>
                    </Form>
            )}
                </Formik>
            </section>
        );
    }
}

export default Settlement;