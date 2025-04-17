import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

const CenteredSpinner = () => {
  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
      bg="gray.100" // Optional: background color
    >
      <Spinner size="xl" />
    </Flex>
  );
};

export default CenteredSpinner;
