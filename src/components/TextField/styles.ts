import styled, { css } from 'styled-components';

// eslint-disable-next-line
interface InputWrapperProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;
  border: 2px solid #232129;

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 2px solid #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    width: 100%;
    color: #f4ede8;

    ::placeholder {
      color: #666360;
      opacity: 1; /* Firefox */
    }
  }

  svg {
    margin-right: 16px;
  }
`;
