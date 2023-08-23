import React from 'react';
import { InputContainer, InputText, IconContainer, ErrorText, Container } from './styles';
import { Controller } from 'react-hook-form';
import { IInput } from './types';

const Input = ({ icon, control, name, errorMessage, ...rest } : IInput) => {
    return (
        <>
            <Container>
                <InputContainer>
                    {icon ? <IconContainer>{icon}</IconContainer> : null}
                    <Controller
                        name={name}
                        control={control}
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field: {value, onChange} }) => (
                            <InputText
                                value={value}
                                onChange={onChange}
                                {...rest}
                            />
                        )}
                    />
                </InputContainer>
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            </Container>
        </>
    );
};
export default Input;
