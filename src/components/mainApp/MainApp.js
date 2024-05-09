import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "../pages/users/Users";
import Categories from "../pages/categories/Categories";
import Products from "../pages/products/Products";
import Sidebar from "../sidebar/Sidebar";
import Auth from "../auth/Auth";
import Dashboard from "../pages/dashboard/Dashboard";

const MainApp = ({ setIsAuthenticated }) => {
  return (
    <div className="flex">
      <Router>
        <Sidebar setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route element={<Auth setIsAuthenticated={setIsAuthenticated} />}>
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/users" element={<Users />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default MainApp;
