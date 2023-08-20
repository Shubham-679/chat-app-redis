import React, { useState } from "react";
import { Button, Input } from "antd";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
        alt="avatar 3"
        style={{ width: "40px", height: "100%" }}
      />
      <Input
        type="text"
        className="form-control form-control-lg"
        id="exampleFormControlInput2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <span className="ms-1 text-muted">
        <i className="fas fa-paperclip"></i>
      </span>
      <span className="ms-3 text-muted">
        <i className="fas fa-smile"></i>
      </span>
      <span className="ms-3" onClick={handleSendMessage}>
        <i className="fas fa-paper-plane"></i>
      </span>
    </div>
  );
};

export default ChatInput;
