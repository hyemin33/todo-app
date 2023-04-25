import styled from '@emotion/styled';

export interface IInput extends React.ComponentPropsWithoutRef<'input'> {
  value?: string | number;
  placeholder: string;
  type: string;
  width?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, placeholder, type, width, ...props }: IInput) => {
  return (
    <StyledInput
      {...props}
      value={value}
      placeholder={placeholder}
      type={type}
      width={width}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
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
