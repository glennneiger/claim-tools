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
        rebuildEstimateSource: 'Source',
        depreciationSource: 'Source',
        estimateLineItems: [],
        deductible: null,
        depreciation: null,
        rcv: null,
        rcvTotal: null
    }

    updateEstimateSource = (event) => {
        event.preventDefault();

        this.setState({
            rebuildEstimateSource: event.target.value
        });
    }
    updateDepreciationSource = (event) => {
        event.preventDefault();

        this.setState({
            depreciationSource: event.target.value
        });
    }

    addLineItem = (event) => {
        event.preventDefault();

        this.setState((prevState) => ({
            estimateLineItems: [...prevState.estimateLineItems, {source: "", amt: null}],
        }));
    }

    formatAdditionalValues = (values) => { //formats the values pulled from the additional line items drop down.

    }

    filterLineItemKeys(arr, query) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 05/08/19
        return arr.filter(function(el) {
            return el[0].toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
    }

    formatLineItems = (values) => { //converts the unformatted object data to the correct "name" and "dollar amount" from the source
        let formattedLineItems = {},
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
                formattedLineItems[entryName[x][1]] = entryName[x][2];
            }

            return formattedLineItems;
    }

    updateValues = (values) => {

        let addtlLineItems = this.formatLineItems(values);

        console.log(addtlLineItems);

        this.setState({
            deductible: values.deductible,
            depreciation: values.depreciation,
            rcv: values.rcv,
            rcvTotal: values.rcvTotal,
            additionalItems: addtlLineItems
        });
    }

    totalRCV = (...values) => {
        let total = null;

        return total
    }

    formatCurrency = (value) => { //https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript 04.27.19
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    render() {
        let estimateLineItems = this.state.estimateLineItems;

        return (
            <section className='settlement-view'>
            <Formik
                    validationSchema={ schema }
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            this.updateValues(values);
                            alert(JSON.stringify(values, null, 2)); //alert set to verify text submissions
                            //this.updateCurrentClaimNumber(values.claimNumber);
                            console.log(values)
                            setSubmitting(false);
                        }, 400);
                    }}
                    initialValues={{
                        rcv: 3456.98,
                        depreciation: 6789.98,
                        deductible: 5000.00,
                        rcvTotal: 23
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
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={ this.addLineItem }>
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