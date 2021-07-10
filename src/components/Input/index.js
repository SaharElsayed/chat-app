import React from 'react';
import "./styles.scss";

/*
  Input component for general used
  @props: {type, placeholder, value, onChangeHandler}
*/

const Input = ({type, placeholder, value, onChangeHandler}) => {
  return ( 
    <input 
      className='input'
      value={value}
      onChange={(e) => onChangeHandler(e)}
      type={type}
      placeholder={placeholder}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: 'Type a message...'
};
 
export default Input;