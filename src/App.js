import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import {Navbar} from './components/Navbar/Navbar.jsx';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Footer } from './components/Footer/Footer.jsx';
import { Courses } from './components/Courses/Courses.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='courses' element={<Courses/>} />

        <Route path='*' element={<PageNotFound />} />

      </Routes>
      <Footer/>

    </>
  );
}

export default App;
