import { NOTFOUND_LOADER } from '@/constants/global'
import { Box, Heading } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import React from 'react'

const NotFoundPage = () => {
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
        <Box w={300}>
          <Lottie animationData={NOTFOUND_LOADER} loop />
        </Box>
      </Box>
      <Heading as="h1" size="lg">
        Transaksi tidak ditemukan
      </Heading>
    </Box>
  )
}

export default NotFoundPage
