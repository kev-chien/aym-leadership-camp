import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const StyledContainer = styled.div` 
    display: flex;
    width: 388px;
    position: absolute;
    height: 392px;
    left: 735px;
    top: 310px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    order-radius: 10px;
     `;

const StyledHeader = styled.h4`
    position: absolute;
    width: 329px;
    height: 26px;
    left: 764px;
    top: 341px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    text-transform: uppercase;
    color: #544244;
    `;

const Field = styled.p`

`;

const PrayerForm = () => {
    <StyledContainer>
        <StyledHeader>Share What You Accomplished</StyledHeader>
        <Formik
            initialValues={{ name: '', accomplishment: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                } else if (!values.accomplishment) {
                    errors.accomplishment = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="Name" />
                    <ErrorMessage name="Name" component="div" />
                    <Field type="text" name="What did you do?" />
                    <ErrorMessage name="accomplishment" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </StyledContainer>
}

export default PrayerForm