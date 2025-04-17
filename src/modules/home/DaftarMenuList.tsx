import React from 'react';
import { Box, SimpleGrid, Text, Card, CardBody, Heading, Stack } from "@chakra-ui/react";

const DaftarMenuList = () => {
  const makanan = [
    { name: "Nasi + Ayam Goreng", price: 25000 },
    { name: "Nasi + Bebek Goreng", price: 20000 },
    { name: "Nasi + Rempelo Ati", price: 30000 },
    { name: "Nasi + Telur", price: 22000 },
    { name: "Nasi + Tempe/Tahu", price: 27000 },
  ];

  const minuman = [
    { name: "Es Jeruk", price: 5000 },
    { name: "Es Teh", price: 5000 },
    { name: "Teh Panas/Hangat", price: 5000 },
    { name: "Jeruk Panas/Hangat", price: 5000 },
    { name: "Kopi", price: 5000 },
    { name: "Air Mineral", price: 5000 },
  ];

  const tambahan = [
    { name: "Sambal Pedes", price: 5000 },
    { name: "Bumbu Hitam", price: 7000 },
    { name: "Lalapan", price: 2000 },
  ];

  const renderSection = (title: string, items: { name: string; price: number }[]) => (
    <Box mb={10}>
      <Text fontWeight="bold" fontSize={['lg', 'xl', '2xl']} mb={3} color="white">
        {title}
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
        {items.map((item, index) => (
          <Card
            key={index}
            border="1px solid"
            borderColor="gray.200"
            shadow="md"
            borderRadius="xl"
            bg="white"
          >
            <CardBody>
              <Text fontWeight="bold" fontSize="xl">
                {item.name}
              </Text>
              <Text color="gray.600">Rp {item.price.toLocaleString("id-ID")}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );

  return (
    <Box p={5} minH="100vh">
      <Text fontWeight="bold" color="white" align="center" fontSize={['2xl', '3xl']} mb={6}>
        DAFTAR MENU
      </Text>

      {renderSection("🍛 Makanan", makanan)}
      {renderSection("🍹 Minuman", minuman)}
      {renderSection("🍢 Tambahan", tambahan)}
    </Box>
  );
};

export default DaftarMenuList;
