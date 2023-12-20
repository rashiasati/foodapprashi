
import React, { useState, useEffect } from 'react';
import Home from "./components/HomeComponent.js";
import About from "./components/AboutComponent.js";
import Contact from "./components/ContactComponent";
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import {DISHES} from './components/dishes'

import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    setDishes(DISHES)
    
    //  const fetchUsers = async () => {
    //   const response = await fetch('http://localhost:3000/menu');
    //   const data = await response.json();
    //   setDishes(data);
    // };
    // fetchUsers();
  },[]);
   
  return (
    <Router>

      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/home' element={<Home />} />
          <Route exact path='/menu' element={<Menu dishes={dishes} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </div>

    </Router>

  )
}


