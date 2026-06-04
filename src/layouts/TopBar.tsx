import { Search } from "lucide-react";
import "./TopBar.css";

function TopBar() {
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
        <div className="topbar-avatar"></div>
        <span>Petar Petrović</span>
      </div>
    </header>
  );
}

export default TopBar;