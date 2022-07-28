import styled from 'styled-components';
import {
  space,
  color,
  position,
  border,
  borderRadius,
  boxShadow,
  background,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  flexbox,
  compose,
  size,
  variant,
} from 'styled-system';
import { ButtonProp } from './types';

export const Button = styled.button<ButtonProp>`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  ${compose(
    space,
    size,
    background,
    position,
    border,
    borderRadius,
    boxShadow,
    fontSize,
    fontFamily,
    fontWeight,
    textAlign,
    flexbox,
    color,
    variant({
      variants: {
        primary: {
          color: '#fff',
          bg: 'green',
          '& :hover': {
            bg: 'blue',
          },
        },
        secondary: {
          color: '#fff',
          bg: 'secondary.0',
        },
        error: {
          color: '#fff',
          bg: 'error.0',
        },
        disabled: {
          color: 'black.4',
          bg: 'black.8',
        },
      },
    }),
  )}
`;
