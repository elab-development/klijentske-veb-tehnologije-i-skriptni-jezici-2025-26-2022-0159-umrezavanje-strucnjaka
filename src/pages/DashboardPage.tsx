import UserCard from "../components/UserCard";
import OpportunityCard from "../components/OpportunityCard";
import { users } from "../data/users";
import { opportunities } from "../data/opportunities";
import { useEffect, useState } from "react";
import type { User } from "../interfaces/User";
import { fetchRecommendedUsers } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { fetchQuote } from "../services/quoteService";
import "./DashboardPage.css";

function DashboardPage() {
  const savedUser = localStorage.getItem("loggedUser");
  const navigate = useNavigate();
  const loggedUser = savedUser
    ? JSON.parse(savedUser)
    : {
      fullName: "Guest User",
    };
  const [apiUsers, setApiUsers] = useState<User[]>([]);
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });
  useEffect(() => {
    fetchRecommendedUsers()
      .then((users) => setApiUsers(users))
      .catch(() => setApiUsers(users));
    fetchQuote()
      .then((data) =>
        setQuote({
          content: data.content,
          author: data.author,
        })
      )
      .catch(() =>
        setQuote({
          content:
            "Success is the sum of small efforts repeated day in and day out.",
          author: "Robert Collier",
        })
      );
  }, []);
  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <h1>Welcome back, {loggedUser.fullName}!</h1>
        <p>Here is what’s happening in your network.</p>
      </section>
      <section className="quote-card">
        <h2>Quote of the day</h2>

        <p>"{quote.content}"</p>

        <span>- {quote.author}</span>
      </section>
      <section className="dashboard-top-row">
        <div className="grow-card">
          <h2>Grow your network</h2>
          <p>Connect with professionals and discover new opportunities.</p>
          <button onClick={() => navigate("/experts")}>Find experts</button>
        </div>

        <div className="recommended-card">
          <div className="card-heading">
            <h2>Recommended for you</h2>
          </div>

          {apiUsers.length === 0 ? (
            <p>Loading recommendations...</p>
          ) : (
            apiUsers.slice(0, 2).map((user) => (
              <UserCard key={user.id} user={user} compact />
            ))
          )}
        </div>
      </section>

      <section className="latest-card">
        <div className="card-heading">
          <h2>Latest Opportunities</h2>
          <button onClick={() => navigate("/opportunities")}>
            View all
          </button>
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