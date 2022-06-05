import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AllRoutes;
