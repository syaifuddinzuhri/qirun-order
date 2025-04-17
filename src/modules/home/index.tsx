import { Container, Flex, Text, Box, Center } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import DaftarMenuList from './DaftarMenuList'

const HomeComponent = () => {
  return (
    <Box py={4}>
      <Center mb={4}>
        <Image
          src="/logo.png"
          width={250}
          height={100}
          alt="Logo Ayam Bebek Qirun"
          priority
        />
      </Center>
      <DaftarMenuList />
    </Box>
  )
}

export default HomeComponent
