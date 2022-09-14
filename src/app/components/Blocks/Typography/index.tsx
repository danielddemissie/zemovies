import {
  fontSize,
  fontFamily,
  fontWeight,
  color,
  space,
  textAlign,
  layout,
  position,
  border,
  boxShadow,
  lineHeight,
  variant,
  compose,
} from 'styled-system';
import styled from 'styled-components';
import { TextProps } from './type';

export const Text = styled.span<TextProps>`
  &:hover {
    ${props => props.hover}
  }
  ${compose(
    fontSize,
    fontFamily,
    fontWeight,
    color,
    space,
    textAlign,
    layout,
    position,
    border,
    boxShadow,
    lineHeight,
    variant({
      variants: {
        multiLineEllipsis: {
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        ellipsis: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
      },
    }),
  )}
`;
