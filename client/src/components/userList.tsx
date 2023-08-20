
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  user: User;
  // setIsChatRoomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleUserSelect: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ user, handleUserSelect }) => {

  console.log(user);
  return (
    <li className="p-2 border-bottom">
      <div className="d-flex justify-content-between" onClick={() => handleUserSelect(user)}>
        <div className="d-flex flex-row">
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              alt="avatar"
              className="d-flex align-self-center me-3"
              width="60"
            />
            <span className="badge bg-success badge-dot"></span>
          </div>
          <div className="pt-1">
            <p className="fw-bold mb-0">{user.name}</p>
            <p className="small text-muted">Hello, Are you there?</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">Just now</p>
          <span className="badge bg-danger rounded-pill float-end">3</span>
        </div>
      </div>
    </li>
  );
};

export default UserList;
