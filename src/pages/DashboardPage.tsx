import UserCard from "../components/UserCard";
import OpportunityCard from "../components/OpportunityCard";
import { recommendedUsers } from "../data/users";
import { opportunities } from "../data/opportunities";

import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <h1>Welcome back, Petar Petrović!</h1>
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

        <div className="opportunities-row">
          {opportunities.slice(0, 3).map((opportunity, index) => (
            <>
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                mini
              />

              {index < 2 && <div className="separator"></div>}
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;