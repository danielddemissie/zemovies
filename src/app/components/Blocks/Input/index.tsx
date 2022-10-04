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
import { Box } from '../Box';

const StyledInput = styled(Field)<InputProps>`
  :focus {
    border: 'none';
  }
  color: ${theme.colors.black[1]};
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.lineHeights[2]};

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
  const { borderRadius, InputIcon, ...rest } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `1.5px solid #053F55`,
        boxShadow: `0px 0px 4px ${theme.colors.primary[0]}`,
      }}
    >
      <StyledInput {...rest} />
      {InputIcon}
    </Box>
  );
};
