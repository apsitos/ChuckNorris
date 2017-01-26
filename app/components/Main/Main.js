import './reset';
import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Random from '../Random/Random';
require('./main-styles');
require('../Button/button-style')

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      jokeNumber: '',
      jokeArray: [],
    }
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random?escape=javascript')
      .then((response) => {
      return response.json()
    }).then((obj) => {
      this.setState({ joke: obj.value.joke });
    })
  }

  getJokes() {
    const url = 'http://api.icndb.com/jokes/random';
    fetch(`${url}/${this.state.jokeNumber}${'?escape=javascript'}`)
      .then((response) => {
      return response.json()
    }).then((obj) => {
      this.state.jokeArray = obj.value.map((jokeObj) => jokeObj.joke )

      this.setState({ jokeArray: this.state.jokeArray });
    })
  }

  jokeNumber(e) {
    this.setState({ jokeNumber: e.target.value });
  }

  render() {
    const cloned = React.cloneElement(this.props.children, {jokeArray: this.state.jokeArray})
    return(
      <div id='container'>
        <Header />
        <Random joke={this.state.joke}/>
        <Link to='/jokes'>
          <Button id='retrieve' handleClick={this.getJokes.bind(this)} name='Get Jokes'/>
        </Link>
        <input type='number' value={this.state.jokeNumber} onChange={(e) => this.jokeNumber(e)}/>
        <div>
          {cloned}
        </div>
      </div>
    )
  }
 }
