import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router';
require('./settings-style');
require('../Button/button-style');


export default class Settings extends React.Component {

  render() {
    return(
      <div id="setting-form">
        <div id="set">
          Set Name: <input type="text" />
          <Button id="set" name="SET" />
          <Button id="reset" name="RESET" />
        </div>
        <div className="controls">
          Parental Controls:

          <label>
            On:
            <input id="radio" type="radio" />
          </label>

          <label>
             Off:
            <input id="radio" type="radio" />
          </label>
        </div>
      </div>
    )
  }
}

{/* <Link to='/jokes'>
<Button id="settings" name="Jokes" />
</Link> */}
