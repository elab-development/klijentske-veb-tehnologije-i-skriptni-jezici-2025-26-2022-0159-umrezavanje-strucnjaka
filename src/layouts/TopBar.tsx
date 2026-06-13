import { Search } from "lucide-react";
import "./TopBar.css";

function TopBar() {
  const savedUser = localStorage.getItem("loggedUser");
  const loggedUser = savedUser
    ? JSON.parse(savedUser)
    : {
      fullName: "Guest User",
      avatar: "GU",
    };
  const initials = loggedUser.fullName
    .split(" ")
    .map((name: string) => name[0])
    .join("")
    .toUpperCase();

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={24} />
        <input
          type="text"
          placeholder="Search experts, skills, opportunities..."
        />
      </div>

      <div className="topbar-user">
        <div className="topbar-avatar">{initials}</div>
        <span>{loggedUser.fullName}</span>
      </div>
    </header>
  );
}

export default TopBar;