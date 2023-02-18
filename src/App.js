import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NhostClient, NhostProvider } from "@nhost/react";
import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoutes";

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN, // qwrigktexqupbxhrevhy
  region: process.env.REACT_APP_NHOST_REGION, // eu-central-1
});

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <BrowserRouter>
        <Routes>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />
    </NhostProvider>
  );
}

export default App;
