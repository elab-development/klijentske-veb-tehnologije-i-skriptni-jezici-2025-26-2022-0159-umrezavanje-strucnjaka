import { useState } from "react";
import OpportunityCard from "../components/OpportunityCard";
import { opportunities } from "../data/opportunities";
import "./OpportunitiesPage.css";

function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesSearch =
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedType === "All" || opportunity.type === selectedType;

    return matchesSearch && matchesType;
  });

  const totalPages = Math.ceil(filteredOpportunities.length / itemsPerPage);

  const currentOpportunities = filteredOpportunities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function handleFilterChange(type: string) {
    setSelectedType(type);
    setCurrentPage(1);
  }

  return (
    <div className="opportunities-page">
      <div className="opportunities-header">
        <div>
          <h1>Opportunities</h1>
          <p>Explore professional opportunities based on your interests.</p>
        </div>
      </div>

      <div className="opportunities-controls">
        <input
          type="text"
          placeholder="Search opportunities..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setCurrentPage(1);
          }}
        />

        <div className="opportunity-filters">
          {["All", "Full time", "Part time", "Remote"].map((type) => (
            <button
              key={type}
              className={selectedType === type ? "active" : ""}
              onClick={() => handleFilterChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="opportunities-list">
        {currentOpportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OpportunitiesPage;