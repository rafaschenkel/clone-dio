import { InputContainer, InputText, IconContainer, ErrorText } from './styles';
import { Controller } from 'react-hook-form';

const Input = ({ icon, control, name, errorMessage, ...rest }) => {
    return (
        <>
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
        </>
    );
};
export default Input;
