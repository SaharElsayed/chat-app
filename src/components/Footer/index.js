import React, {useState} from 'react';
import Button from '../Button';
import Input from '../Input';
import './styles.scss';

const Footer = () => {
  const [msg, setMsg] = useState('');

 const handleChange = (e) => {
    setMsg(e.target.value)
  }

  return (
    <div className="conversation-footer d-flex flex-center">
      <Input value={msg} onChangeHandler={handleChange} />
      <Button isDisabled={msg.length === 0} theme="primary" text="Send"  />
    </div>
  );
}
 
export default Footer;