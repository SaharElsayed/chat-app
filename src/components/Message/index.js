import React from "react";
import Avatar from "../Avatar";
import "./styles.scss";

/*
  Message component for general used
  @props: {sender: 'user' | 'interlocutor', body, date, isLastInterlocutorMsg: true | false}
*/
const Message = ({ sender, body, date, isLastInterlocutorMsg }) => (
  <div
    className={`d-flex  ${sender === "user" ? "justify-end" : "flex-center"}`}
  >
    {sender === "interlocutor" && isLastInterlocutorMsg && (
      <Avatar size="small" extraClass="mr-10" />
    )}
    <div
      className={`msg ${sender}-msg ${
        sender === "interlocutor" && !isLastInterlocutorMsg ? "ml-50" : ""
      }`}
    >
      <p data-testid="msg-text">{body}</p>
      <small data-testid="msg-date">{date}</small>
    </div>
  </div>
);
export default Message;
