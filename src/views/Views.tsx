import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

const About = lazy(() => import('./About'));

const Views: FunctionComponent = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="about"
        element={
          <Suspense fallback={<>Loading....</>}>
            <About />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Views;
