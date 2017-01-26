import React from 'react';
import Button from '../Button/Button';
require('./settings-style');


export default class Settings extends React.Component {

  render() {
    return(
      <div id="setting-form">
        <Link to='/jokes'>
          <Button id="settings" name="Jokes" />
        </Link>
        <input label="Set Name:" type="text" />
        <Button className="" name="SET" />
        <Button name="RESET" />
      </div>
    )
  }
}
