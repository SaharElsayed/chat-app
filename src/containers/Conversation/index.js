import React, { Component } from 'react';
import Header from './../../components/Header';
import Message from '../../components/Message';
import Footer from './../../components/Footer';
import Converstation from './../../fakeData/Conversation.json';
import './styles.scss';
class Conversation extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  renderConversation(conversationData) {
    const interlocutorMsgs = conversationData.filter((item) => item.sender === 'interlocutor'),
    lastInterlocutorMsg = interlocutorMsgs[interlocutorMsgs.length - 1]

    return conversationData.map(({id, text, sender, date}) => (
      <Message 
        key={`msg-${id}`} 
        isLastInterlocutorMsg={id === lastInterlocutorMsg['id']} 
        sender={sender} 
        body={text} 
        date={date} 
      />)
    )
  }

  render(){
    return (
      <>
        <Header />
        <div className="msgs-container p-20">
          {this.renderConversation(Converstation)}
          <div ref={(el) => { this.messagesEnd = el;}}></div>
        </div>
        <Footer />
      </>
    )
  }
}
export default Conversation;