import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const StyledInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  background-color: ${(props) => props.theme.textInput.active};
  color: ${(props) => props.theme.textInput.activeColor};
  border-radius: ${pxToRem(8)};
  border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.borderColor};
  box-sizing: border-box;
  cursor: pointer;
  height: ${pxToRem(40)};
  font-size: ${pxToRem(14)};
  font-weight: 500;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &:disabled {
    background-color: ${(props) => props.theme.textInput.disabled};
    border: ${pxToRem(1)} solid
      ${(props) => props.theme.textInput.disabledBorderColor};
    color: ${(props) => props.theme.textInput.disabledColor};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.textInput.placeholderColor};
  }
`
