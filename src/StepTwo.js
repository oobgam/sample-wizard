import React from 'react';
import { Formik } from 'formik';
import { stepTwoSchema } from './validation';
import Input from './Input';
import Button from './Button';

export default ({ initialValues, currentStep, setFormValues }) => (
    <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
            const newValues = Object.assign(
                {},
                {stepTwo: values},
                (currentStep !== undefined && currentStep !== null) ? { currentStep: currentStep + 1} : { showModal: false }
            );
            setFormValues(newValues);
        }}
        validationSchema={stepTwoSchema}>
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
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <Input
                        name="lineOne"
                        label="Address Line 1"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        hint="Street address, P.O. box, company name, c/o"
                        value={values.lineOne}
                        hasError={errors.lineOne && touched.lineOne}
                        errorMessage={errors.lineOne}
                    />
                    <Input
                        name="lineTwo"
                        label="Address Line 2"
                        handleChange={handleChange}
                        hint="Apartment, suite, unit, bldg, flr, etc..."
                        handleBlur={handleBlur}
                        value={values.lineTwo}
                        hasError={errors.lineTwo && touched.lineTwo}
                        errorMessage={errors.lineTwo}
                    />
                    <Input
                        name="city"
                        label="City"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.city}
                        hasError={errors.city && touched.city}
                        errorMessage={errors.city}
                    />
                    <Input
                        name="state"
                        label="State"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.state}
                        hasError={errors.state && touched.state}
                        errorMessage={errors.state}
                    />
                    <Input
                        name="zip"
                        label="Zip"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.zip}
                        hasError={errors.zip && touched.zip}
                        errorMessage={errors.zip}
                    />
                    <Button type="submit">{currentStep !== undefined && currentStep !== null ? 'Next' : 'Update'}</Button>
                </form>
            );
        }}
    </Formik>
);
