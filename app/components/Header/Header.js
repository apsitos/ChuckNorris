import React from 'react';
import './header-style';
import Button from '../Button/Button';

const Header = () => {
    return (
      <div id="header">
        <h1>Chuck Norris Joke Machine</h1>
        <Button id="settings" name="Settings"/>
      </div>
    );
};

export default Header;
