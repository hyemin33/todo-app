import styled from '@emotion/styled';

interface IButton {
  text: string;
  disabled: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const Button = ({ onClick, disabled, text, ...props }: IButton) => {
  return (
    <Btn onClick={onClick} disabled={disabled} {...props}>
      {text}
    </Btn>
  );
};

const Btn = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 4px;
  border: solid 1px #e5e5e8;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  &:disabled {
    background-color: #c0c0c6;
    border: none;
  }
`;

export default Button;
