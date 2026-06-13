import { useState } from "react";
import UserCard from "../components/UserCard";
import { users } from "../data/users";
import "./ExpertsPage.css";

function ExpertsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    return (
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="experts-page">
      <div className="experts-header">
        <h1>Experts</h1>
        <p>Find and connect with professionals from different fields.</p>
      </div>

      <input
        className="experts-search"
        type="text"
        placeholder="Search experts by name, role or location..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div className="experts-list">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default ExpertsPage;