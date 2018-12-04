import React from 'react';
import { Formik } from 'formik';
import { stepOneSchema } from './validation';
import Input from './Input';
import Button from './Button';

export default ({ initialValues, currentStep, setFormValues}) => (
    <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
            const newValues = Object.assign(
                {},
                {stepOne: values},
                (currentStep !== undefined && currentStep !== null) ? { currentStep: currentStep + 1} : { showModal: false }
            );
            setFormValues(newValues);
        }}
        validationSchema={stepOneSchema}>
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
                        name="firstName"
                        label="First Name"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.firstName}
                        hasError={errors.firstName && touched.firstName}
                        errorMessage={errors.firstName}
                    />
                    <Input
                        name="lastName"
                        label="Last Name"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.lastName}
                        hasError={errors.lastName && touched.lastName}
                        errorMessage={errors.lastName}
                    />

                    <Input
                        name="email"
                        label="e-mail"
                        type="email"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.email}
                        hasError={errors.email && touched.email}
                        errorMessage={errors.email}
                    />
                    <Input
                        name="phone"
                        label="phone"
                        type="tel"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.phone}
                        hasError={errors.phone && touched.phone}
                        errorMessage={errors.phone}
                    />
                    <Button type="submit">{currentStep !== undefined && currentStep !== null ? 'Next' : 'Update'}</Button>
                </form>
            );
        }}
    </Formik>
);
