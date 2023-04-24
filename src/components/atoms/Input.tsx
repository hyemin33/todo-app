import styled from '@emotion/styled';


interface IInput {
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, placeholder, type, ...props }: IInput) => {
  return (
    <InputArea>
      {label && <LabelText>{label}</LabelText>}
      <StyledInput placeholder={placeholder} type={type} {...props} />

    </InputArea>
  );
};

const StyledInput = styled.input`
  width: auto;
  font-size: 14px;
  background: #fff;
  outline: 0;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  padding: 10px 5px;
  &::placeholder {
    color: #bdbdbd;
  }
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
export default Input;
