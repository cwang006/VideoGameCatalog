import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";
import "./components/auth/Auth.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <section className="containter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* need  different path */}
          {/*<Route path="/" element={<MainPage gameList={gameList} />} /> */}

          <Route path="/search" element={<SearchPage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
    </Router>
  );
};

export default App;