import React, { useState, useEffect } from "react";
import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";
import SocketioService from "../services/socketService";

const ChatApp: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    SocketioService.setupSocketConnection();
    SocketioService.socketEmit("connectionRequest", {
      id: "qtwftyqf12y1yy13bh1h2h",
    });
    SocketioService.subscribe("connected", () => setIsOnline(true));

    return () => {
      SocketioService.disconnect();
    };
  }, []);

  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
  }

  return (
    <section style={{ backgroundColor: "#CDC4F9" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card" id="chat3" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <div className="row">
                  <LeftPanel handleUserSelect={handleUserSelect}/>
                  <RightPanel selectedUser={selectedUser}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatApp;
