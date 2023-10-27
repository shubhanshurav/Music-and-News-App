import React from 'react';
import Footer from './Component/Footer';
import News from './Component/SpaceNews/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Music from './Component/Music';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Music />} />
        <Route exact path="/News" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
