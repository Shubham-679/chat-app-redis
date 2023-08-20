import React from "react";
import Message from "./message";

interface MSG {
  id: number;
  text: string;
  sender: string;
}

interface MessageListProps {
  messages: MSG[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div
      className="pt-3 pe-3"
      data-mdb-perfect-scrollbar="true"
      style={{ position: "relative", height: "400px", overflow: "scroll" }}
    >
      {messages.map((msg) => (
        <Message msg={msg} />
      ))}

      {/* <div className="d-flex flex-row justify-content-start">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
            12:00 PM | Aug 13
          </p>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-end">
        <div>
          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="small me-3 mb-3 rounded-3 text-muted">
            12:00 PM | Aug 13
          </p>
        </div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
          alt="avatar 1"
          style={{ width: "45px", height: "100%" }}
        />
      </div> */}
    </div>
  );
};

export default MessageList;

{
  /* <div className="d-flex flex-row justify-content-start">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
            12:00 PM | Aug 13
          </p>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-end">
        <div>
          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="small me-3 mb-3 rounded-3 text-muted">
            12:00 PM | Aug 13
          </p>
        </div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
          alt="avatar 1"
          style={{ width: "45px", height: "100%" }}
        />
      </div> */
}
