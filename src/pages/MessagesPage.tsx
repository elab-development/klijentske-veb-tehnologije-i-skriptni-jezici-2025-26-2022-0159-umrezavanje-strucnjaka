import { useState } from "react";
import { users } from "../data/users";
import { messages } from "../data/messages";
import "./MessagesPage.css";

function MessagesPage() {
  const savedUser = localStorage.getItem("loggedUser");

  const loggedUser = savedUser
    ? JSON.parse(savedUser)
    : {
        id: 0,
        fullName: "Guest User",
        connections: [],
      };

  const connectedUsers = users.filter((user) =>
    loggedUser.connections.includes(user.id)
  );

  const [selectedUser, setSelectedUser] = useState(connectedUsers[0]);
  const [chatMessages, setChatMessages] = useState(messages);
  const [input, setInput] = useState("");

  const currentMessages = selectedUser
    ? chatMessages.filter(
        (message) =>
          (message.senderId === selectedUser.id &&
            message.receiverId === loggedUser.id) ||
          (message.senderId === loggedUser.id &&
            message.receiverId === selectedUser.id)
      )
    : [];

  function handleSend() {
    if (!input.trim() || !selectedUser) return;

    setChatMessages([
      ...chatMessages,
      {
        senderId: loggedUser.id,
        receiverId: selectedUser.id,
        text: input,
        time: "Now",
      },
    ]);

    setInput("");
  }

  return (
    <div className="messages-page">
      <div className="messages-sidebar">
        <h1>Messages</h1>

        {connectedUsers.map((user) => (
          <div
            key={user.id}
            className={
              selectedUser?.id === user.id
                ? "conversation-card active"
                : "conversation-card"
            }
            onClick={() => setSelectedUser(user)}
          >
            <div className="conversation-avatar">
              {user.fullName
                .split(" ")
                .map((name: string) => name[0])
                .join("")
                .toUpperCase()}
            </div>

            <div>
              <h3>{user.fullName}</h3>
              <p>{user.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="messages-content">
        {selectedUser ? (
          <>
            <div className="chat-header">
              <h2>{selectedUser.fullName}</h2>
              <p>{selectedUser.title}</p>
            </div>

            <div className="chat-body">
              {currentMessages.length === 0 ? (
                <p>No messages yet. Start the conversation.</p>
              ) : (
                currentMessages.map((message, index) => (
                  <div
                    key={index}
                    className={
                      message.senderId === loggedUser.id
                        ? "message-bubble mine"
                        : "message-bubble theirs"
                    }
                  >
                    <p>{message.text}</p>
                    <span>{message.time}</span>
                  </div>
                ))
              )}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />

              <button onClick={handleSend}>Send</button>
            </div>
          </>
        ) : (
          <h2>No connections yet.</h2>
        )}
      </div>
    </div>
  );
}

export default MessagesPage;