import { Home, Briefcase, MessageCircle, User, LogOut } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/LOGO.png";

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { label: "Home", path: "/dashboard", icon: Home },
        { label: "Opportunities", path: "/opportunities", icon: Briefcase },
        { label: "Messages", path: "/messages", icon: MessageCircle },
        { label: "Profile", path: "/profile", icon: User },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="ExpertConnect" />
            </div>

            <nav className="sidebar-menu">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <button
                            key={item.path}
                            className={`sidebar-link ${isActive ? "active" : ""}`}
                            onClick={() => navigate(item.path)}
                        >
                            <Icon size={20} />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            <button className="sidebar-link logout" onClick={() => navigate("/login")}>
                <LogOut size={20} />
                <span>Log out</span>
            </button>
        </aside>
    );
}

export default Sidebar;