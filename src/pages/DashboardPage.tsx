import UserCard from "../components/UserCard";
import OpportunityCard from "../components/OpportunityCard";
import { recommendedUsers } from "../data/users";
import { opportunities } from "../data/opportunities";
import "./DashboardPage.css";

function DashboardPage() {
  const savedUser = localStorage.getItem("loggedUser");

  const loggedUser = savedUser
    ? JSON.parse(savedUser)
    : {
      fullName: "Guest User",
    };

  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <h1>Welcome back, {loggedUser.fullName}!</h1>
        <p>Here is what’s happening in your network.</p>
      </section>

      <section className="dashboard-top-row">
        <div className="grow-card">
          <h2>Grow your network</h2>
          <p>Connect with professionals and discover new opportunities.</p>
          <button>Find experts</button>
        </div>

        <div className="recommended-card">
          <div className="card-heading">
            <h2>Recommended for you</h2>
            <button>View all</button>
          </div>

          {recommendedUsers.slice(0, 2).map((user) => (
            <UserCard key={user.id} user={user} compact />
          ))}
        </div>
      </section>

      <section className="latest-card">
        <div className="card-heading">
          <h2>Latest Opportunities</h2>
          <button>View all</button>
        </div>

        <div className="opportunities-row">
          <OpportunityCard opportunity={opportunities[0]} mini />
          <div className="separator"></div>
          <OpportunityCard opportunity={opportunities[1]} mini />
          <div className="separator"></div>
          <OpportunityCard opportunity={opportunities[2]} mini />
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;