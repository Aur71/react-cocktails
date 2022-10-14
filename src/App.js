import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import CocktailPage from './pages/CocktailPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/react-cocktails" element={<Home />} />
        <Route path="/react-cocktails/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route
          exact
          path="/react-cocktails/cocktail/:id"
          element={<CocktailPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
