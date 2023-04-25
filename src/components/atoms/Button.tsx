import styled from '@emotion/styled';

interface IButton {
  className?: string;
  disabled?: boolean;
  width?: number;
  text: string;
  onClick: (e: React.MouseEvent) => void;
}

const Button = ({ disabled, width, text, onClick, ...props }: IButton) => {
  return (
    <Btn onClick={onClick} disabled={disabled} width={width} {...props}>
      {text}
    </Btn>
  );
};

const Btn = styled.button<{ width?: number }>`
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  height: 42px;
  border-radius: 4px;
  border: solid 1px #333;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  &.line-blue {
    background: none;
    color: #3b3a66;
    border-color: #3b3a66;
  }
  &.line-red {
    background: none;
    color: #af0000d5;
    border-color: #af0000d5;
  }
  &:disabled {
    background-color: #c0c0c6;
    border: none;
  }
`;

export default Button;
