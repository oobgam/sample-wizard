import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
`

const ModalBody = styled.div`
    max-width: 500px;
    width: 100%;
    box-shadow: 8px 2px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 4px;
    overflow: hidden;
`

const ModalHeader = styled.div`
    background-color: darkslategray;
    color: white;
    padding: 0.5rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
`

const ModalContent = styled.div`
    background-color: white;
    padding: 2rem;
`

const CloseButton = styled.button`
    background-color: transparent;
    font-size: 1.5rem;
    border: 0;
    position: absolute;
    right: 0.5rem;
    top: 0;
    cursor: pointer;
    color: white;
`

export default ({children, closeModal}) => <Background>
    <ModalBody>
        <ModalHeader>Edit Details <CloseButton onClick={closeModal}>&times;</CloseButton></ModalHeader>
        <ModalContent>
        {children}
        </ModalContent>
    </ModalBody>
</Background>