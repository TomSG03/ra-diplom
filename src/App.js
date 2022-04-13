import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from './components/LayOut';
import Home from './components/Home';
import Catalog from './components/Catalog';
import About from './components/About';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import Page404 from './components/Page404';

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
