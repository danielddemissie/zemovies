/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '../Blocks';

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
      <ul
        style={{
          display: 'flex',
          gap: '2rem',
        }}
      >
        <Link to="/">Home</Link>
      </ul>

      <ul>
        <li>
          <Link to="/signup">Signup</Link>{' '}
        </li>
      </ul>
    </Flex>
  );
};
