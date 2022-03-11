import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Agency from './view/Agency';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="*" element={<Agency />} />
    </ReactRoutes>
  );
};

export default Routes;
