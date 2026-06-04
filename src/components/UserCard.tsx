import type { User } from "../interfaces/User";
import "./UserCard.css";

interface UserCardProps {
  user: User;
  compact?: boolean;
}

function UserCard({ user, compact = false }: UserCardProps) {
  return (
    <article className={compact ? "user-card compact" : "user-card"}>
      <div className="user-avatar">{user.avatar}</div>

      <div>
        <h3>{user.fullName}</h3>
        <p>{user.title}</p>
        {!compact && <span>{user.location}</span>}
      </div>
    </article>
  );
}

export default UserCard;