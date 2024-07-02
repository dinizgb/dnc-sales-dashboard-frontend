import styled from 'styled-components'
import { TypographiesProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledH1 = styled.h1<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 24)};
  font-weight: ${(props) => props.weight || 600};
  letter-spacing: ${pxToRem(-1)};
  line-height: ${(props) => pxToRem(props.lineheight || 36)};
`

export const StyledH2 = styled.h2<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`

export const StyledH3 = styled.h2<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`

export const StyledP = styled.p<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
  &.error {
    color: ${(props) => props.theme.typographies.error};
  }
  &.success {
    color: ${(props) => props.theme.typographies.success};
  }
`

export const StyledSpan = styled.span<TypographiesProps>`
  color: ${(props) => props.color || props.theme.typographies.subtitle};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`

export const StyledUl = styled.ul<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
  list-style-position: inside;
  li {
    list-style-position: outside;
    margin-left: ${pxToRem(15)};
  }
`
