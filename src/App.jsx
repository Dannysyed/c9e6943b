import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivityFeed from "./components/ActivityFeed.jsx";
import ActivityDetail from "./components/ActivityDetail.jsx";
import Archive from "./components/archive.jsx";
import Header from "./Header.jsx";
import BottomTabBar from "./components/BottomTabBar.jsx";
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
        <BottomTabBar />
      </div>
    </Router>
  );
};

export default App;
