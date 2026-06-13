import { useParams } from "react-router-dom";
import { MapPin, Briefcase, Euro } from "lucide-react";
import { opportunities } from "../data/opportunities";
import "./OpportunityDetailsPage.css";

function OpportunityDetailsPage() {
  const { id } = useParams();

  const opportunity = opportunities.find(
    (opp) => opp.id === Number(id)
  );

  if (!opportunity) {
    return <h1>Opportunity not found.</h1>;
  }

  return (
    <div className="opportunity-details-page">
      <section className="details-header">
        <div>
          <h1>{opportunity.title}</h1>
          <p>{opportunity.company}</p>

          <div className="details-meta">
            <span>
              <MapPin size={16} /> {opportunity.location}
            </span>
            <span>
              <Briefcase size={16} /> {opportunity.type}
            </span>
          </div>
        </div>
      </section>

      <div className="details-layout">
        <main className="details-main">
          <section className="details-card">
            <h2>About the opportunity</h2>
            <p>{opportunity.description}</p>
          </section>

          <section className="details-card">
            <h2>Responsibilities</h2>
            <ul>
              {opportunity.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="details-card">
            <h2>Requirements</h2>
            <ul>
              {opportunity.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </main>

        <aside className="details-sidebar">
          <section className="details-card">
            <h2>Job Details</h2>

            <div className="detail-row">
              <span>Company</span>
              <strong>{opportunity.company}</strong>
            </div>

            <div className="detail-row">
              <span>Location</span>
              <strong>{opportunity.location}</strong>
            </div>

            <div className="detail-row">
              <span>Type</span>
              <strong>{opportunity.type}</strong>
            </div>

            <div className="detail-row">
              <span>Category</span>
              <strong>{opportunity.category}</strong>
            </div>

            <div className="detail-row">
              <span>Experience</span>
              <strong>{opportunity.experience}</strong>
            </div>

            <div className="detail-row">
              <span>Salary</span>
              <strong>
                <Euro size={15} /> {opportunity.salary}
              </strong>
            </div>

            <button className="apply-btn">Apply Now</button>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default OpportunityDetailsPage;