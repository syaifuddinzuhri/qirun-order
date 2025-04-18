import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Text, Card, CardBody, Heading, Stack, Icon, HStack, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { addMenuItem, getAllMenuItems, MenuData, MenuItem } from 'src/services/MenuService';

const DaftarMenuList = () => {
  const [menu, setMenu] = useState<MenuData | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [carts, setCarts] = useState<{ id: string; qty: number }[]>([]);

  const getMenuData = async () => {
    try {
      const data = await getAllMenuItems();
      setMenu(data)
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  useEffect(() => {
    getMenuData()
  }, []);

  if (!menu) {
    return <></>;
  }

  const { makanan, minuman, tambahan } = menu;

  const handleAddToCart = (itemId: string) => {
    setCarts(prevCarts => {
      const existingItem = prevCarts.find(cartItem => cartItem.id === itemId);
      if (existingItem) {
        return prevCarts.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }
      return [...prevCarts, { id: itemId, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCarts(prevCarts => {
      const existingItem = prevCarts.find(cartItem => cartItem.id === itemId);
      if (existingItem && existingItem.qty > 1) {
        return prevCarts.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem
        );
      }
      return prevCarts.filter(cartItem => cartItem.id !== itemId); // Remove item if qty is 1
    });
  };

  const renderModal = () => (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent width="100%" m="0">
        <ModalHeader>Keranjang Anda</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Item yang dipilih:</Text>
          {carts.map(cartItem => {
            const item =
              menu?.makanan.find(i => i.id === cartItem.id) ||
              menu?.minuman.find(i => i.id === cartItem.id) ||
              menu?.tambahan.find(i => i.id === cartItem.id);

            if (!item) return null;

            const itemTotal = item.price * cartItem.qty;

            return (
              <Flex key={cartItem.id} justify="space-between" align="center" py={2} borderBottom="1px solid #eee">
                <Box>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text fontSize="sm" color="gray.600">Rp {item.price.toLocaleString("id-ID")} x {cartItem.qty}</Text>
                </Box>
                <Text fontWeight="bold">Rp {itemTotal.toLocaleString("id-ID")}</Text>
              </Flex>
            );
          })}

          <Box mt={4} pt={3} mb={3}>
            <Flex justify="space-between">
              <Text fontWeight="bold" fontSize="lg">Total Dibayar</Text>
              <Text fontWeight="bold" fontSize="lg">
                Rp {carts.reduce((acc, cartItem) => {
                  const item =
                    menu?.makanan.find(i => i.id === cartItem.id) ||
                    menu?.minuman.find(i => i.id === cartItem.id) ||
                    menu?.tambahan.find(i => i.id === cartItem.id);
                  return acc + (item?.price || 0) * cartItem.qty;
                }, 0).toLocaleString("id-ID")}
              </Text>
            </Flex>
            <Text mt={1} fontSize="sm" color="gray.500">
              * Belum termasuk biaya ongkir
            </Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );


  const Counter = ({ itemId }: { itemId: string }) => {
    return (
      <HStack spacing={4} align="center">
        <HiOutlineMinusCircle fontSize={26} cursor={'pointer'} onClick={() => handleRemoveFromCart(itemId)} />
        <Text>{carts.find(cartItem => cartItem.id === itemId)?.qty || 0}</Text>
        <HiOutlinePlusCircle fontSize={26} cursor={'pointer'} onClick={() => handleAddToCart(itemId)} />
      </HStack>
    );
  };

  const renderSection = (title: string, items: MenuItem[]) => (
    <Box mb={10}>
      <Text fontWeight="bold" fontSize={['lg', 'xl', '2xl']} mb={3} color="white">
        {title}
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={5}>
        {items.map((item, index) => (
          <Card
            key={index}
            border="1px solid"
            borderColor="gray.200"
            shadow="md"
            borderRadius="xl"
            bg={item.is_ready ? "white" : "gray.100"}
            opacity={item.is_ready ? 1 : 0.6}
            position="relative"
            overflow='hidden'
          >
            {!item.is_ready && (
              <Box
                position="absolute"
                backgroundColor="red.500"
                color="white"
                borderRadius='sm'
                right='0'
                px={1}
                py={1}
                fontSize="xs"
              >
                Kosong
              </Box>
            )}

            <CardBody>
              <Flex justify="space-between" align="center" w="100%">
                <Box>
                  <Text fontWeight="bold" fontSize="lg" textDecoration={item.is_ready ? "none" : "line-through"}>
                    {item.name}
                  </Text>
                  <Text color="gray.600" textDecoration={item.is_ready ? "none" : "line-through"} fontSize="sm">
                    Rp {item.price.toLocaleString("id-ID")}
                  </Text>
                </Box>

                {item.is_ready && (
                  <Box>
                    <Counter itemId={item.id} />
                  </Box>
                )}
              </Flex>
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

      {renderModal()}

      {carts.length > 0 && (
        <Box position="fixed" bottom="0" left="0" width="100%" bg="white" p={4}>
          <Flex justify="space-between" align="center">
            <Text>Keranjang ({carts.length} item)</Text>
            <Button colorScheme="teal" onClick={onOpen}>
              Lihat Keranjang
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default DaftarMenuList;
