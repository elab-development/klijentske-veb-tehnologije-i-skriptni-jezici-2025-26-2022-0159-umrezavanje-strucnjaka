import { useParams } from "react-router-dom";
import { MapPin, Mail, MessageCircle, UserPlus } from "lucide-react";
import { users } from "../data/users";
import { useState } from "react";
import "./ExpertDetailsPage.css";



function ExpertDetailsPage() {
  const { id } = useParams();

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <h1>Expert not found.</h1>;
  }

  const expertId = user.id;

  const initials = user.fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const savedUser = localStorage.getItem("loggedUser");

  const loggedUser = savedUser ? JSON.parse(savedUser) : null;

  const userConnections: number[] = loggedUser?.connections ?? [];

  const isConnected = userConnections.includes(expertId);

  const [connected, setConnected] = useState(isConnected);

  function handleConnect() {
    if (!loggedUser) return;

    const currentConnections: number[] =
      loggedUser.connections ?? [];

    if (!currentConnections.includes(expertId)) {
      const updatedUser = {
        ...loggedUser,
        connections: [...currentConnections, expertId],
      };

      localStorage.setItem(
        "loggedUser",
        JSON.stringify(updatedUser)
      );

      setConnected(true);
    }
  }

  return (
    <div className="expert-details-page">
      <section className="expert-header-card">
        <div className="expert-avatar">{initials}</div>

        <div className="expert-info">
          <h1>{user.fullName}</h1>
          <p>{user.title}</p>

          <div className="expert-meta">
            <span>
              <MapPin size={16} /> {user.location}
            </span>
            <span>
              <Mail size={16} /> {user.email}
            </span>
          </div>
        </div>

        <div className="expert-actions">
          <button
            className={connected ? "connected-btn" : "connect-btn"}
            onClick={handleConnect}
          >
            <UserPlus size={18} />
            {connected ? "Connected" : "Connect"}
          </button>
          <button className="message-btn">
            <MessageCircle size={18} /> Message
          </button>
        </div>
      </section>

      <section className="expert-content">
        <main className="expert-main">
          <div className="expert-card">
            <h2>About</h2>
            <p>{user.about}</p>
          </div>

          <div className="expert-card">
            <h2>Skills</h2>
            <div className="expert-skills">
              {user.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="expert-card">
            <h2>Experience</h2>
            <div className="expert-experience">
              <h3>{user.title}</h3>
              <p>{user.experience}</p>
            </div>
          </div>
        </main>

        <aside className="expert-sidebar">
          <div className="expert-card">
            <h2>Profile Stats</h2>

            <div className="expert-stat">
              <strong>{user.connections.length}</strong>
              <span>Connections</span>
            </div>

            <div className="expert-stat">
              <strong>{user.skills.length}</strong>
              <span>Skills</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default ExpertDetailsPage;