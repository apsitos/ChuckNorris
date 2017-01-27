import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router';
require('./settings-style');
require('../Button/button-style');


export default class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  enterName(e) {
    this.setState({ name: e.target.value })
  }

  submitName() {
    console.log('bame');
  }

  resetName() {
    console.log('again');
  }

  render() {
    return(
      <div id="setting-form">
        <div id="set">
          Set Name:
          <input type="text"
              value={this.state.name}
              onChange={(e) => {this.enterName(e)}}/>
          <Button id="set" name="SET" handleClick={this.submitName.bind(this)}/>
          <Button id="reset" name="RESET" handleClick={this.resetName.bind(this)}/>
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
