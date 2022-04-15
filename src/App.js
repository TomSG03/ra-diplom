import React from 'react';
import { HashRouter as Router , Route, Routes } from "react-router-dom";

import Layout from './components/LayOut';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contacts from './pages/Contacts';
// import Cart from './components/Cart';
import Page404 from './pages/Page404';

import './App.css';

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            {/* <Route path='/cart' element={<Cart />} /> */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
