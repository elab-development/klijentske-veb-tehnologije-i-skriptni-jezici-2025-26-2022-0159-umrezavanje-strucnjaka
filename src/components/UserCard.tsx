import type { User } from "../interfaces/User";
import { useNavigate } from "react-router-dom";
import "./UserCard.css";

interface UserCardProps {
  user: User;
  compact?: boolean;
  clickable?: boolean;
}

function UserCard({ user, compact = false, clickable = true, }: UserCardProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/experts/${user.id}`);
  }

  const initials = user.fullName
    .split(" ")
    .map((name: string) => name[0])
    .join("")
    .toUpperCase();

  return (
    <article
      className={compact ? "user-card compact" : "user-card"}
      onClick={clickable ? handleClick : undefined}
    >
      <div className="user-avatar">{initials}</div>

      <div>
        <h3>{user.fullName}</h3>
        <p>{user.title}</p>
        {!compact && <span>{user.location}</span>}
      </div>
    </article>
  );
}

export default UserCard;