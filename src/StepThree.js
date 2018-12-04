import React, { Component } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import Select from 'react-select';
import { stepThreeSchema, OPTIONS } from './validation';
import Button from './Button';
import { Label, ErrorMessage } from './Input';

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
`;

const Textarea = styled.textarea`
    border-radius: 0.25rem;
    font-size: 1rem;
    border: 1px solid darkslategray;
    padding: 0.5rem;
    margin-bottom: 0.25rem;
    ${p => (p.hasError ? 'border-color: red;' : '')};
`;

export default ({ initialValues, currentStep, setFormValues }) => (
    <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
            const newValues = Object.assign(
                {},
                {stepThree: values},
                (currentStep !== undefined && currentStep !== null) ? { currentStep: currentStep + 1} : { showModal: false }
            );
            setFormValues(newValues);
        }}
        validationSchema={stepThreeSchema}>
        {props => {
            const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
                setFieldValue,
                setFieldTouched
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <CustomSelect
                        value={values.commentSubject}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.commentSubject}
                        touched={touched.commentSubject}
                        />
                    <FieldContainer>
                        <Label htmlFor="commentBox">Comment</Label>
                        <Textarea
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="comment"
                            rows={3}
                            id="commentBox"
                            hasError={errors.comment && touched.comment}
                            value={values.comment}
                        />
                        {errors.comment && touched.comment ? (
                            <ErrorMessage>{errors.comment}</ErrorMessage>
                        ) : null}
                    </FieldContainer>
                    <Button type="submit">{currentStep !== undefined && currentStep !== null ? 'Next' : 'Update'}</Button>
                </form>
            );
        }}
    </Formik>
);

class CustomSelect extends Component {
    handleChange = value => {
        this.props.onChange('commentSubject', value);
    }

    handleBlur = value => {
        this.props.onBlur('commentSubject', value);
    }

    render() {
        const { touched, error, value } = this.props;
        return (
            <FieldContainer>
                <Label htmlFor="commentSubject">Subject</Label>
                <Select
                    id="commentSubject"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={value}
                    options={OPTIONS}
                />
                { Boolean(error) && touched ? <ErrorMessage>{error}</ErrorMessage> : null }
            </FieldContainer>
        );
    }
}
