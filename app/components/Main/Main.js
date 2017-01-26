import './reset';
import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header';
import Initial from '../Initial/Initial';
import Button from '../Button/Button';
import Random from '../Random/Random'
require('./main-styles');

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
      Object.keys(obj)
      console.log(Object.keys(obj));
      // this.setState({ jokeArray: obj.value });
    })
  }

  jokeNumber(e) {
    this.setState({ jokeNumber: e.target.value });
  }

  render() {
    //if route path = '/', display <Initial />, else display {jokes}
    return(
      <div id='container'>
        <Header />
        <Random joke={this.state.joke}/>
        <Link to='/jokes'>
          <Button id='retrieve' handleClick={this.getJokes.bind(this)} name='Get Jokes'/>
        </Link>
        <input type='number' value={this.state.jokeNumber} onChange={(e) => this.jokeNumber(e)}/>
        <div>
          <Initial />
          {this.props.children}
        </div>
      </div>
    )
  }
 }
