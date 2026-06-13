import UserCard from "../components/UserCard";
import { users } from "../data/users";
import "./ExpertsPage.css";

function ExpertsPage() {
  return (
    <div className="experts-page">
      <div className="experts-header">
        <h1>Experts</h1>
        <p>Find and connect with professionals from different fields.</p>
      </div>

      <div className="experts-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default ExpertsPage;