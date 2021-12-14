import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

const Views: FunctionComponent = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default Views;
