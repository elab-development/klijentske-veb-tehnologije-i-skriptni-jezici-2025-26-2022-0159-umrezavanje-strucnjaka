import OpportunityCard from "../components/OpportunityCard";
import { opportunities } from "../data/opportunities";
import "./OpportunitiesPage.css";

function OpportunitiesPage() {
  return (
    <div className="opportunities-page">
      <div className="opportunities-header">
        <div>
          <h1>Opportunities</h1>
          <p>Explore professional opportunities based on your interests.</p>
        </div>
      </div>

      <div className="opportunities-list">
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
          />
        ))}
      </div>
    </div>
  );
}

export default OpportunitiesPage;