import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Sidebar from "./sidebar/Sidebar";

const InventoryApp = ({ setIsAuthenticated }) => {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar setIsAuthenticated={setIsAuthenticated} />
          <Routes>
            <Route path="/dashboard" exact Component={Dashboard} />
            <Route path="/users" Component={Users} />
            <Route path="/categories" Component={Categories} />
            <Route path="/products" Component={Products} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default InventoryApp;