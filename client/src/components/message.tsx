interface MSG {
    id: number;
    text: string;
    sender: string;
  }
  
  interface MessageListProps {
    msg : MSG;
  }

const Message: React.FC<MessageListProps> = ({ msg }) => {
    console.log(msg)

    return (  <div className="d-flex flex-row justify-content-start">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
      alt="avatar 1"
      style={{ width: "45px", height: "100%" }}
    />
    <div>
      <p
        className="small p-2 ms-3 mb-1 rounded-3"
        style={{ backgroundColor: "#f5f6f7" }}
      >
       {msg.text}
      </p>
      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
        {new Date(msg.id).toLocaleString()}
      </p>
    </div>
  </div> );
}
 
export default Message;