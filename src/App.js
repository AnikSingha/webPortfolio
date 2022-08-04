import React from 'react'
import Home  from './routes/Home.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<h1>hi</h1>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
