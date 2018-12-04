import * as yup from 'yup';

export const OPTIONS = [
    { value: 'Staff Feedback', label: 'Staff Feedback' },
    { value: 'Checkout Feedback', label: 'Checkout Feedback' },
    { value: 'Product Feedback', label: 'Product Feedback' },
];

export const stepOneSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup
        .string()
        .required()
        .email(),
    phone: yup.number(),
});

export const stepTwoSchema = yup.object().shape({
    lineOne: yup.string().required(),
    lineTwo: yup.string(),
    city: yup.string(),
    state: yup.string(),
    zip: yup.number(),
});

export const stepThreeSchema = yup.object().shape({
    commentSubject: yup.mixed().oneOf(OPTIONS),
    comment: yup.string().max(1000),
});
