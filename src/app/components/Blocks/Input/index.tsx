import {
  space,
  color,
  fontSize,
  fontFamily,
  border,
  background,
  borderRadius,
  position,
  compose,
  fontWeight,
  boxShadow,
} from 'styled-system';
import styled from 'styled-components';
import { Field } from 'formik';
import { InputProps } from './types';
import React from 'react';
import { theme } from 'styles/theme';

const StyledInput = styled(Field)<InputProps>`
  :focus {
    border: 'none';
  }
  color: ${theme.colors.black[1]};
  background-color: ${theme.colors.white[12]};
  border: 1.5px solid ${theme.colors.black[3]};
  border-radius: ${props => props.borderRadius || '8px'};
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.lineHeights[2]};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${theme.colors.primary[0]};
  }
  ${compose(
    space,
    color,
    fontSize,
    fontFamily,
    border,
    background,
    borderRadius,
    position,
    fontWeight,
    boxShadow,
  )};
`;

export const Input = (props: InputProps) => {
  const { borderRadius, ...rest } = props;
  return (
    <div>
      <StyledInput {...rest} />
    </div>
  );
};
