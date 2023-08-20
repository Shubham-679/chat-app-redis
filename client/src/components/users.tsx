import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./userList";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersProps {
  // setIsChatRoomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleUserSelect: (user: User) => void;
}

const Users: React.FC<UsersProps> = ({ handleUserSelect }) => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      data-mdb-perfect-scrollbar="true"
      style={{
        position: "relative",
        height: "400px",
        overflow: "scroll",
      }}
    >
      <ul className="list-unstyled mb-0">
        {users.map((user) => (
          <UserList user={user} handleUserSelect={handleUserSelect} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
