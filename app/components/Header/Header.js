import React from 'react';
import './header-style';

import Button from '../Button/Button';

// const logStuff = () => {
//   console.log("clicked!");
// }

const Header = () => {
    return (
      <div id="header">
        <h1>Chuck Norris Joke Machine</h1>
        <Button id="settings" />
      </div>
    );
};

export default Header;
