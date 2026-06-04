import { MapPin } from "lucide-react";
import type { Opportunity } from "../interfaces/Opportunity";
import "./OpportunityCard.css";

interface OpportunityCardProps {
  opportunity: Opportunity;
  mini?: boolean;
}

function OpportunityCard({ opportunity, mini = false }: OpportunityCardProps) {
  return (
    <article className={mini ? "opportunity-card mini" : "opportunity-card"}>
      <h3>{opportunity.title}</h3>
      <p>{opportunity.company}</p>
      <span>{opportunity.type}</span>

      <div className="opportunity-location">
        <MapPin size={15} />
        {opportunity.location}
      </div>
    </article>
  );
}

export default OpportunityCard;