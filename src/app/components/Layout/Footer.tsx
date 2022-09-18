/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Flex } from '../Blocks';
import { Text } from '../Blocks/Typography';

export default () => {
  let show = true;
  /**
   * Change the logic to
   * dynamically show the footer
   */
  return <>{show ? <Content /> : null}</>;
};

const Content = () => (
  <Flex
    bg={'grey'}
    style={{
      width: '100%',
    }}
  >
    <Text color={'white.0'}>Footer</Text>
  </Flex>
);
