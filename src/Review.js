import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Button from './Button';

const Header = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
`;

const DetailContainer = styled.div`
    margin-bottom: 1rem;

    h3 {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
    }
`;

const DetailList = styled.ul`
    padding-left: 0.25rem;
    margin: 0;
    list-style: none;

    li {
        margin-bottom: 0.5rem;
        display: flex;
        flex-direction: column-reverse;

        span {
            margin-top: 0.25rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            font-size: 0.75rem;
            color: lightslategray;
            letter-spacing: 0.05em;
        }
    }
`;

export default ({
    userDetails,
    address,
    comments,
    editDetail,
    initialValues,
}) => (
    <Formik
        initialValues={{...userDetails, ...address, ...comments}}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
        }}>
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

            return isSubmitting ? <div>Submitting...</div> : (
                <form onSubmit={handleSubmit}>
                    <Header>Review Submission</Header>
                    <DetailContainer>
                        <h3>
                            Details{' '}
                            <Button onClick={editDetail.bind(null, 0)}>
                                Edit
                            </Button>
                        </h3>
                        <DetailList>
                            <li>
                                <span>First Name</span>
                                {userDetails.firstName}
                            </li>
                            <li>
                                <span>Last Name</span>
                                {userDetails.lastName}
                            </li>
                            <li>
                                <span>Email</span>
                                {userDetails.email}
                            </li>
                            <li>
                                <span>Phone</span>
                                {userDetails.phone ? userDetails.phone : '—'}
                            </li>
                        </DetailList>
                    </DetailContainer>

                    <DetailContainer>
                        <h3>
                            Address{' '}
                            <Button onClick={editDetail.bind(null, 1)}>
                                Edit
                            </Button>
                        </h3>
                        <DetailList>
                            <li>
                                <span>Address Line One</span>
                                {address.lineOne ? address.lineOne : '—'}
                            </li>
                            <li>
                                <span>Address Line Two</span>
                                {address.lineTwo ? address.lineTwo : '—'}
                            </li>
                            <li>
                                <span>City</span>
                                {address.city ? address.city : '—'}
                            </li>
                            <li>
                                <span>State</span>
                                {address.state ? address.state : '—'}
                            </li>
                            <li>
                                <span>Zip/Postal Code</span>
                                {address.zip ? address.zip : '—'}
                            </li>
                        </DetailList>
                    </DetailContainer>

                    <DetailContainer>
                        <h3>
                            Comment{' '}
                            <Button onClick={editDetail.bind(null, 2)}>
                                Edit
                            </Button>
                        </h3>
                        <DetailList>
                            <li>
                                <span>Subject</span>
                                {comments.commentSubject &&
                                comments.commentSubject.value
                                    ? comments.commentSubject.value
                                    : ''}
                            </li>
                            <li>
                                <span>Message</span>
                                {comments.comment ? comments.comment : '—'}
                            </li>
                        </DetailList>
                    </DetailContainer>
                    <Button type="submit">Submit</Button>
                </form>
            );
        }}
    </Formik>
);
