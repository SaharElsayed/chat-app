import React from 'react';
import Avatar from '../Avatar';
import './styles.scss';

/*
  Header component for general used
  @props: {name}
*/
const Header = ({name}) => {
  return ( 
    <div className="conversataion-header d-flex flex-center">
      <Avatar size="large" extraClass="mr-10" />
      <h3 className="user-name mb-0">{name}</h3>
    </div>
  
    );
}

Header.defaultProps = {
  name: 'Marc'
 };

export default Header;