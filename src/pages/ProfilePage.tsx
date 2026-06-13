import UserCard from "../components/UserCard";
import { users } from "../data/users";
import "./ProfilePage.css";

function ProfilePage() {
  const savedUser = localStorage.getItem("loggedUser");

  const loggedUser = savedUser
    ? JSON.parse(savedUser)
    : {
        id: 0,
        fullName: "Guest User",
        email: "guest@example.com",
        username: "guest",
        title: "New Member",
        location: "Belgrade, Serbia",
        about: "New member of ExpertConnect.",
        experience: "No experience added yet.",
        skills: [],
        connections: [],
      };

  const initials = loggedUser.fullName
    .split(" ")
    .map((name: string) => name[0])
    .join("")
    .toUpperCase();

  const connectedUsers = users.filter((user) =>
    loggedUser.connections?.includes(user.id)
  );

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
            <h3>{loggedUser.connections?.length || 0}</h3>
            <span>Connections</span>
          </div>
        </div>
      </section>

      <section className="profile-grid">
        <div className="profile-main-card">
          <h2>About</h2>
          <p>{loggedUser.about}</p>

          <h2>Skills</h2>
          <div className="skills-list">
            {loggedUser.skills?.map((skill: string) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <h2>Experience</h2>
          <div className="experience-item">
            <h3>{loggedUser.title}</h3>
            <p>{loggedUser.experience}</p>
          </div>
        </div>

        <div className="profile-side-card">
          <h2>Connections</h2>

          {connectedUsers.map((user) => (
            <UserCard key={user.id} user={user} compact />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;