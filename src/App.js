import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header';
import Page1 from './pages/page-1/page-1'
import Page2 from './pages/page-2/page-2'
import Page3 from './pages/page-3/page-3'
import Interest from './pages/interest/interest';
import Results from './pages/results/results';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/interest' element={<Interest />} />
          {/* <Route path='/results' element={<Results />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
