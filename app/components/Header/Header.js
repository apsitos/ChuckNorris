import React from 'react';
import './header-style';
import { Link } from 'react-router';
import Button from '../Button/Button';

const Header = () => {
    return (
      <div id="header">
        <h1>Chuck Norris Joke Machine</h1>
        <Link to='/settings'>
          <Button id="settings" name="Settings" />
        </Link>
      </div>
    );
};

export default Header;
