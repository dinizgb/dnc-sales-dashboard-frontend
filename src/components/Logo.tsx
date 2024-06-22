import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const Logo = styled.figure<{ height: number; width: number }>`
  background-image: url(/${(props) => props.theme.appLogo});
  background-size: cover;
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`
