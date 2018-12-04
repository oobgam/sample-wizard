import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
`

export const Label = styled.label`
    margin-bottom: 0.25rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: darkslategray;
`

const Field = styled.input`
    border-radius: 0.25rem;
    font-size: 1rem;
    border: 1px solid darkslategray;
    padding: 0.5rem;
    margin-bottom: 0.25rem;
    ${p => p.hasError ? 'border-color: red;' : ''}
`

export const ErrorMessage = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    color: red;
`

const Hint = styled.small`
    font-style: italic;
    color: lightslategray;
`

const Input = ({
    name,
    label,
    handleChange,
    handleBlur,
    type,
    value,
    hasError,
    errorMessage,
    placeholder,
    hint
}) => (
    <InputContainer>
        <Label htmlFor={`${name}-target`}>{label} {hint ? <Hint>{hint}</Hint> : ''}</Label>
        <Field
            hasError={hasError}
            type={type ? type : 'text'}
            id={`${name}-target`}
            name={name}
            value={value}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={placeholder}
        />
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
);

export default Input;