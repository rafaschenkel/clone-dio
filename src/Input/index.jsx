import { InputContainer, InputText, IconContainer } from './styles';

const Input = ({ icon, $form = '', ...rest }) => {
    return (
        <InputContainer $form={$form}>
            {icon ? <IconContainer>{icon}</IconContainer> : null}
            <InputText {...rest} />
        </InputContainer>
    );
};
export default Input;
