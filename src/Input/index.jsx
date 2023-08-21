import { InputContainer, InputText, IconContainer, ErrorText, Container } from './styles';
import { Controller } from 'react-hook-form';

const Input = ({ icon, control, name, errorMessage, ...rest }) => {
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
                        render={({ field }) => (
                            <InputText
                                {...field}
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
