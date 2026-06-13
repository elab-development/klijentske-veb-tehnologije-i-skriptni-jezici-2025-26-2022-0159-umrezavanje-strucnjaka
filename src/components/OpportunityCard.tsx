import { MapPin } from "lucide-react";
import type { Opportunity } from "../interfaces/Opportunity";
import { useNavigate } from "react-router-dom";
import "./OpportunityCard.css";

interface OpportunityCardProps {
  opportunity: Opportunity;
  mini?: boolean;
}

function getCategoryClass(category: string) {
  switch (category) {
    case "Tech":
      return "green";

    case "Design":
      return "yellow";

    case "Backend":
      return "purple";

    default:
      return "green";
  }
}

function OpportunityCard({
  opportunity,
  mini = false,
}: OpportunityCardProps) {
  const categoryClass = getCategoryClass(
    opportunity.category
  );
  const navigate = useNavigate();
  const iconLetter = opportunity.category[0];
  if (mini) {
    return (
      <article className="opportunity-card mini">
        <div className={`mini-icon ${categoryClass}`}>
          {opportunity.category[0]}
        </div>

        <div className="mini-content">
          <h3>{opportunity.title}</h3>
          <p>{opportunity.company}</p>
          <span>{opportunity.type}</span>

          <div className="opportunity-location">
            <MapPin size={14} />
            {opportunity.location}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="opportunity-card">
      <div className={`opportunity-icon ${categoryClass}`}>
        {iconLetter}
      </div>

      <div className="opportunity-info">
        <h3>{opportunity.title}</h3>
        <p className="company-name">{opportunity.company}</p>

        <div className="opportunity-location">
          <MapPin size={16} />
          {opportunity.location}
        </div>

        <p className="opportunity-description">
          {opportunity.description}
        </p>

        <div className="opportunity-tags">
          <span>{opportunity.type}</span>
          <span>{opportunity.category}</span>
        </div>
      </div>

      <button
        className="opportunity-view-btn"
        onClick={() => navigate(`/opportunities/${opportunity.id}`)}
      >
        View
      </button>
    </article>
  );
}

export default OpportunityCard;