import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Custom404: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="gray.50"
      p={4}
      textAlign="center"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
      </Box>
      <Heading as="h1" size="2xl" mb={4} mt={3}>
        Page Not Found
      </Heading>
      <Text fontSize="lg" mb={6}>
        Oops! The page you are looking for doesn’t exist.
      </Text>
    </Box>
  );
};

export default Custom404;
