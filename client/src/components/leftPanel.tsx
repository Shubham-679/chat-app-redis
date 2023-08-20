import React, { useState } from "react";
import SearchBar from "./serchBar";
import Users from "./users";

interface User {
    id: number;
    name: string;
    email: string;
  }

  
interface LeftPanelProps {
    // setIsChatRoomOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleUserSelect: (user: User) => void;
}

const LeftPanel:React.FC<LeftPanelProps> = ({ handleUserSelect}) => {
  return (
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
      <div className="p-3">
        <SearchBar />
        <Users handleUserSelect={handleUserSelect}/>
      </div>
    </div>
  );
};

export default LeftPanel;
