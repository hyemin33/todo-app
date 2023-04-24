import styled from '@emotion/styled';

export interface IInput {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, type, ...props }: IInput) => {
  return <StyledInput placeholder={placeholder} type={type} {...props} />;
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

export default Input;
