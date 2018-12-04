import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Review from './Review';
import Modal from './Modal';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 100%;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

/*
    STEP 1:
        Contact form with First Name, Last Name, Email, Phone
    STEP 2:
        Address with Street 1, Street 2 (Apt, Unit), City, State, Zip
    STEP 3:
        Generic comment form
            Dropdown
                * Staff Feedback
                * Checkout Feedback
                * Product Feedback
            limit 100 chars
    STEP 4:
        Review screen show all answers
        Edit button will show a modal to edit answers
*/

const MainContaier = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: gainsboro;
    padding: 2rem;

    ${p => (p.showModal ? 'overflow: hidden; max-height: 100vh;' : '')};
`;

const WizardPanel = styled.div`
    padding: 2rem 1rem;
    border-radius: 4px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    border-top: 8px solid darkslategray;
    background-color: white;
`;

const Heading = styled.h1`
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
    font-size: 1.5rem;
    color: darkslategray;
`;

const defaultState = {
    stepOne: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    },

    stepTwo: {
        lineOne: '',
        lineTwo: '',
        city: '',
        state: '',
        zip: '',
    },

    stepThree: {
        commentSubject: null,
        comment: '',
    },
    currentStep: 0,
    showModal: false,
    currentEdit: 0,
};

class App extends Component {
    state = defaultState;

    setFormValues(val) {
        this.setState(val);
    }

    editDetail(currentEdit, e) {
        e.preventDefault();
        this.setState({
            showModal: true,
            currentEdit: currentEdit
        })
    }

    render() {
        const {
            stepOne,
            stepTwo,
            stepThree,
            currentStep,
            currentEdit,
            showModal,
        } = this.state;
        const isStepOne = currentStep === 0;
        const isStepTwo = currentStep === 1;
        const isStepThree = currentStep === 2;
        const isReview = currentStep === 3;

        const editStepOne = currentEdit === 0;
        const editStepTwo = currentEdit === 1;
        const editStepThree = currentEdit === 2;
        return (
            <Fragment>
                <MainContaier showModal={showModal}>
                    <WizardPanel>
                        <Heading>Step {currentStep + 1}</Heading>
                        {isStepOne && (
                            <StepOne
                                initialValues={stepOne}
                                currentStep={currentStep}
                                setFormValues={this.setFormValues.bind(this)}
                            />
                        )}
                        {isStepTwo && (
                            <StepTwo
                                initialValues={stepTwo}
                                currentStep={currentStep}
                                setFormValues={this.setFormValues.bind(this)}
                            />
                        )}
                        {isStepThree && (
                            <StepThree
                                initialValues={stepThree}
                                currentStep={currentStep}
                                setFormValues={this.setFormValues.bind(this)}
                            />
                        )}
                        {isReview && (
                            <Review
                                editDetail={this.editDetail.bind(this)}
                                userDetails={stepOne}
                                address={stepTwo}
                                comments={stepThree}
                            />
                        )}
                    </WizardPanel>
                    <GlobalStyle />
                </MainContaier>
                {showModal && (
                    <Modal
                        closeModal={e => {
                            e.preventDefault();
                            this.setState({ showModal: false });
                        }}>
                        {editStepOne && (
                            <StepOne
                                initialValues={stepOne}
                                setFormValues={this.setFormValues.bind(this)}
                            />
                        )}
                        {editStepTwo && (
                            <StepTwo
                                initialValues={stepTwo}
                                setFormValues={this.setFormValues.bind(this)}
                            />
                        )}
                        {editStepThree && (
                            <StepThree
                                initialValues={stepThree}
                                setFormValues={this.setFormValues.bind(this)}
                            />
                        )}
                    </Modal>
                )}
            </Fragment>
        );
    }
}

export default App;
