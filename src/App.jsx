import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/header";
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;
