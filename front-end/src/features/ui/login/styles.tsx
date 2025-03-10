import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const LogInBtn = styled.button`
    display: flex;
    width: 335px;
    height: 44px;
    margin-top: 26px;
    color: rgba(255, 255, 255, 1);
    border-radius: 60px;
    align-items: center;
    justify-content: center;
    background-color: rgba(89, 177, 122, 1);
`;
export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;
export const InputsField = styled(Field)`
    width: 335px;
    height: 44px;
    border-radius: 60px;
    padding: 0 18px;
    outline: none;
    
    &:focus {
        border: 1px solid rgba(89, 177, 122, 1);
    };
`;
export const ErrorMessages = styled(ErrorMessage)`
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 150px;
    height: 22px;
    border-radius: 60px;
    color: rgba(232, 80, 80, 1);
    background-color: rgba(232, 80, 80, 0.1);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    border: 1px solid rgba(232, 80, 80, 1);
`;