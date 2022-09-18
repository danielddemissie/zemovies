/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Flex } from '../Blocks';
import { Text } from '../Blocks/Typography';
import { HeaderProps } from './type';

export default (props: HeaderProps) => {
  return (
    <Flex>
      <Text>Header</Text>
    </Flex>
  );
};
