import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import UserRegister from "./components/User/UserRegister";
import UserLogin from "./components/User/UserLogin";
import "./index.css";
import DashboardLayout from "./components/DashboardLayout";
import UserContacts from "./components/User/UserContacts";
import UserProfile from "./components/User/UserProfile";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="contacts" element={<UserContacts />} />
          <Route path="users/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
