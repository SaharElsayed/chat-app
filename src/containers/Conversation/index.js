import React, { Component } from 'react';
import Header from './../../components/Header';
import Message from '../../components/Message';
import Converstation from './../../fakeData/Conversation.json';
class Conversation extends Component {

  renderConversation(conversationData) {
    const interlocutorMsgs = conversationData.filter((item, index) => item.sender === 'interlocutor'),
    lastInterlocutorMsg = interlocutorMsgs[interlocutorMsgs.length - 1]
    console.log(lastInterlocutorMsg);

    return conversationData.map(({id, text, sender, date}) => 
       (
        <Message key={`msg-${id}`} isLastInterlocutorMsg={id === lastInterlocutorMsg['id']} sender={sender} body={text} date={date} />
      )
    )
  }

  render(){
    return (
      <>
        <Header />
        <div className="p-20">
          {this.renderConversation(Converstation)}
        </div>

      </>
    )
  }
}

export default Conversation;
