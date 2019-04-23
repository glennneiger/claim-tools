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

const schema = yup.object({
    rcv: yup.number().required(),
    depreciation: yup.number().required(),
});
class Settlement extends Component {
    state = {
        rebuildEstimateSource: 'Estimate Source'
    }

    updateEstimateSource = (event) => {
        this.setState({
            rebuildEstimateSource: event.target.value
        });
    }

    render() {
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
                        rcv: '4567.98',
                        depreciation: '432.09'
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
                    <h4>Settlement Options</h4>
                    <InputGroup
                        className="mb-3"
                        size='sm'
                        >
                        <DropdownButton
                        as={InputGroup.Prepend}
                        //variant="outline-secondary"
                        title={this.state.rebuildEstimateSource}
                        id="input-group-dropdown-1"
                    >
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
                            isValid={ touched.rcv && !errors.rcv }
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" size='sm'>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        //variant="outline-secondary"
                        title={this.state.rebuildEstimateSource}
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Independent Adjuster</Dropdown.Item>
                        <Dropdown.Item href="#">Builder Consultant</Dropdown.Item>
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
                            isValid={ touched.depreciation && !errors.depreciation }
                        />
                    </InputGroup>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
            )}
                </Formik>
            </section>
        );
    }
}

export default Settlement;