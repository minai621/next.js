import NavBar from '@/components/NavBar';
import CartContext from '@/lib/context/Cart';
import '@/styles/globals.css';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [items, setItems] = useState({});
  return (
    <ChakraProvider>
      <CartContext.Provider value={{ items, setItems }}>
        <Flex w='full' minH='100vh' bgColor='gray.100'>
          <NavBar />
          <Box maxW='70vw' m='auto'>
            <Component {...pageProps} />
          </Box>
        </Flex>
      </CartContext.Provider>
    </ChakraProvider>
  );
}
