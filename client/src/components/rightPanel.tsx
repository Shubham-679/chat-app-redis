import React, { useState } from "react";
import ChatSection from "./chatSection";

interface SelectedUser {
    id: number;
    name: string;
    email: string;
}

interface RightPanelProps {
    selectedUser: SelectedUser | null;
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedUser }) => {
  return (
    <div className="col-md-6 col-lg-7 col-xl-8">
      {selectedUser ? <ChatSection selectedUser={selectedUser}/> : <h1>Please select a user</h1>}
    </div>
  );
};

export default RightPanel;
