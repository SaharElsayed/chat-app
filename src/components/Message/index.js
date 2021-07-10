import React from 'react';
import Avatar from '../Avatar';
import './styles.scss';

/*
  Message component for general used
  @props: {sender: 'user' | 'interlocutor', body, date, isLastInterlocutorMsg: true | false}
*/

const Message = ({sender, body, date, isLastInterlocutorMsg }) => {
  return ( 
    <div className={`d-flex  ${sender === 'user' ? 'justify-end' : 'flex-center'}`}>
      {
        (sender === 'interlocutor' && isLastInterlocutorMsg) &&
        <Avatar size="small" extraClass="mr-10" /> 
      }
      <div className={`msg ${sender}-msg ${sender === 'interlocutor' && !isLastInterlocutorMsg ? 'ml-50' : ''}`}>
        <p>{body}</p>
        <small>{date}</small>
      </div>
    </div>
    );
}
 
export default Message;