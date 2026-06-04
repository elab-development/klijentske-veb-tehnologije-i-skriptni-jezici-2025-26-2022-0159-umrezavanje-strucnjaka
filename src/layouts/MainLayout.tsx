import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "../layouts/TopBar";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />

      <div className="page-area">
        <TopBar />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

