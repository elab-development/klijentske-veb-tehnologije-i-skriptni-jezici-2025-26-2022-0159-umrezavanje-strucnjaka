import { useParams } from "react-router-dom";
import { users } from "../data/users";
import "./ProfilePage.css";

function ExpertDetailsPage() {
  const { id } = useParams();

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <h1>Expert not found.</h1>;
  }

  const initials = user.fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <div className="profile-page">
      <section className="profile-header-card">
        <div className="profile-avatar">{initials}</div>

        <div>
          <h1>{user.fullName}</h1>
          <p>{user.title}</p>
          <span>{user.location}</span>
          <br />
          <span>{user.email}</span>
        </div>
      </section>

      <section className="profile-grid">
        <div className="profile-main-card">
          <h2>About</h2>
          <p>{user.about}</p>

          <h2>Skills</h2>
          <div className="skills-list">
            {user.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <h2>Experience</h2>
          <div className="experience-item">
            <h3>{user.title}</h3>
            <p>{user.experience}</p>
          </div>
        </div>

        <div className="profile-side-card">
          <h2>Connections</h2>
          <p>{user.connections} connections</p>
        </div>
      </section>
    </div>
  );
}

export default ExpertDetailsPage;