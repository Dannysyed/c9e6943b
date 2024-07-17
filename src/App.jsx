import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivityFeed from "./components/ActivityFeed.jsx";
import { createRoot } from "react-dom/client";
import ActivityDetail from "./components/ActivityDetail.jsx";
import Archive from "./components/archive.jsx";
import Header from "./Header.jsx";
const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<ActivityFeed />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
