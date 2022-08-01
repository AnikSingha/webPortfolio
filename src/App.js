import React from 'react'
import NavBar from "./components/NavBar.js"
import Header from './components/Header.js';
import { Flex, VStack, Spacer, HStack} from '@chakra-ui/layout'
import About from './components/About.js';

function App() {
  return (
      <VStack>
        <NavBar/>
        <Header/>
        <About/>
      </VStack>
  );
}

export default App;
