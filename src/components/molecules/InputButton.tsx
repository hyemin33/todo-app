import styled from '@emotion/styled';
import Button from '@src/components/atoms/Button';
import Input, { IInput } from '@src/components/atoms/Input';

interface IInputButton extends IInput {
  text: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const InputButton = ({
  placeholder,
  type,
  width,
  text,
  disabled,
  onClick,
  ...props
}: IInputButton) => {
  return (
    <InputArea>
      <Input placeholder={placeholder} type={type} {...props} />
      <Button onClick={onClick} disabled={disabled} text={text} width={width} />
    </InputArea>
  );
};

const InputArea = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;

  & > button {
    margin-left: 5px;
  }
`;

export default InputButton;
