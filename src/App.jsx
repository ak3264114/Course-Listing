// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import CourseListingPage from './page-components/CourseListingPage ';

const App = () => {
  return (
    <Router>
      <div className=" min-h-screen">
        <Routes>
          <Route path="/" element={<CourseListingPage/>}  />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
