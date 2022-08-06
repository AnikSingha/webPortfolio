import React from 'react'
import Home  from './routes/Home.js'
import Projects from './routes/Projects.js'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
