import React from 'react'
import NavBar from "./components/NavBar.js"
import Footer from "./components/Footer.js"
import Home  from './routes/Home.js';
import { BrowserRouter as Router, Route, Routes} 
        from "react-router-dom";
import {VStack} from '@chakra-ui/layout'

function App() {
  return (
      <VStack>
        <NavBar/>
        <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<Home/>} />
            </Routes>
        </Router>
        <Footer/>
      </VStack>
  );
}

export default App;
