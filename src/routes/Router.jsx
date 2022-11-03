import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../screens/Contact";
import Links from "../screens/Links";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
