import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import OpportunityDetailsPage from "./pages/OpportunityDetailsPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./layouts/MainLayout";
import ExpertsPage from "./pages/ExpertsPage";
import ExpertsDetailsPage from "./pages/ExpertsDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/opportunities/:id" element={<OpportunityDetailsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/experts/:id" element={<ExpertsDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;