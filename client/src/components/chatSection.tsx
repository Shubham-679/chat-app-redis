import axios from "axios";
import React, { useState, useEffect } from "react";
import ChatInput from "./chatInput";
import MessageList from "./messageList";
import SocketioService from "../services/socketService";

interface SelectedUser {
  id: number;
  name: string;
  email: string;
}

interface ChatSectionProps {
  selectedUser: SelectedUser | null;
}

interface Message {
  id: number;
  text: string;
  sender: string;
}

const ChatSection: React.FC<ChatSectionProps> = ({ selectedUser }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  console.log(selectedUser, "selectedUser");

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`)
        .then((res) => {
          SocketioService.socketEmit("joinRoom", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //   return () => {
    //    cleanup
    //   }
    
  }, [selectedUser]);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: new Date().getTime(),
      text: message,
      sender: "User",
    };
    setMessages([...messages, newMessage]);
  };
  return (
    <>
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </>
  );
};

export default ChatSection;
