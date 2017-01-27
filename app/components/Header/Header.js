import React from 'react';
import './header-style';
import { Link } from 'react-router';
import Button from '../Button/Button';

const triggerButton = () => {
  console.log('button clicked');
}

const Header = () => {

    return (
      <div id="header">
        <h1>Chuck Norris Joke Machine</h1>
        <Link to='/settings'>
          <Button id="settings" name="Settings" handleClick={() => triggerButton()}/>
        </Link>
      </div>
    );
};

export default Header;
