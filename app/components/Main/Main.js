import './reset';
import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Random from '../Random/Random'
require('./main-styles');

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random')
      .then((response) => {
      return response.json()
    }).then((obj) => {
      this.setState({ joke: obj.value.joke });
    })
  }

  handleClick() {
    console.log('Joke here.');
  }

  render() {
    return(
      <div id='container'>
        <Header />
        <Random joke={this.state.joke}/>
        <Link to='/jokes'>
          <Button id='retrieve' handleClick={this.handleClick.bind(this)}>Get Jokes</Button>
        </Link>
        {this.props.children}
      </div>
    )
  }
 }