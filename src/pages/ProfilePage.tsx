import UserCard from "../components/UserCard";
import { users } from "../data/users";
import "./ProfilePage.css";

function ProfilePage() {
  const savedUser = localStorage.getItem("loggedUser");

  const loggedUser = savedUser
    ? JSON.parse(savedUser)
    : {
      fullName: "Guest User",
      email: "guest@example.com",
      username: "guest",
      title: "New Member",
      location: "Belgrade, Serbia",
    };

  const initials = loggedUser.fullName
    .split(" ")
    .map((name: string) => name[0])
    .join("")
    .toUpperCase();
  const connectionsCount = users.length;

  return (
    <div className="profile-page">
      <section className="profile-header-card">
        <div className="profile-avatar">{initials}</div>

        <div>
          <h1>{loggedUser.fullName}</h1>
          <p>{loggedUser.title}</p>
          <span>{loggedUser.location}</span>
          <br />
          <span>{loggedUser.email}</span>
        </div>
        <div className="profile-stats">
          <div className="profile-stat">
            <h3>{connectionsCount}</h3>
            <span>Connections</span>
          </div>
        </div>
      </section>

      <section className="profile-grid">
        <div className="profile-main-card">
          <h2>About</h2>
          <p>
            Passionate professional focused on building modern, responsive and
            user-friendly digital products.
          </p>

          <h2>Skills</h2>
          <div className="skills-list">
            <span>React</span>
            <span>TypeScript</span>
            <span>UI/UX</span>
            <span>CSS</span>
          </div>

          <h2>Experience</h2>
          <div className="experience-item">
            <h3>{loggedUser.title}</h3>
            <p>Data Flow · 2022 - Present</p>
          </div>
        </div>

        <div className="profile-side-card">
          <h2>Connections</h2>

          {users.slice(0, 3).map((user) => (
            <UserCard key={user.id} user={user} compact />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;