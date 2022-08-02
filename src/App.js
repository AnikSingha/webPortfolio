import React from 'react'
import NavBar from "./components/NavBar.js"
import Header from './components/Header.js';
import {VStack} from '@chakra-ui/layout'
import About from './components/About.js';
import Skills from './components/Skills.js';
import Spacing from './components/Spacing.js'
import ContactBtn from './components/ContactBtn'
function App() {
  return (
      <VStack>
        <NavBar/>
        <Header/>
        <About/>
        <Skills/>
        <Spacing/>
        <ContactBtn/>
      </VStack>
  );
}

export default App;
