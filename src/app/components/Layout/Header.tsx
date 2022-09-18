/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '../Blocks';
import { Text } from '../Blocks/Typography';

export default () => {
  return (
    <Flex
      bg={'blue'}
      justifyContent="space-between"
      style={{
        width: '100%',
        top: 0,
        zIndex: 10,
      }}
    >
      <Text color={'white.0'}>Header</Text>

      <ul>
        <li>
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </Flex>
  );
};
