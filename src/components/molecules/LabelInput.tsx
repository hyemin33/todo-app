import styled from '@emotion/styled';
import Input, { IInput } from '@src/components/atoms/Input';

interface ILabelInput extends IInput {
  label?: string;
  error?: string;
}

const LabelInput = ({
  label,
  placeholder,
  type,
  error,
  ...props
}: ILabelInput) => {
  return (
    <InputArea>
      {label && <LabelText>{label}</LabelText>}
      <Input placeholder={placeholder} type={type} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputArea>
  );
};

const ErrorText = styled.span`
  color: #d10a0a;
  font-size: 14px;
  margin-top: 5px;
`;
const LabelText = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;
export default LabelInput;
