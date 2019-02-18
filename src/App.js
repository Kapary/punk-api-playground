import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    window.setTimeout(() => {
      fetch('https://api.punkapi.com/v2/beers', {mode: 'cors'})
        .then(response => response.json())
        .catch(error => { console.log('error', error); }  )
        .then( data => { this.setState({'beers': data, isLoading: false }); })
    }, 3000);
  }

  renderList = (elements) => {
    if (!elements.length) {
      return null;
    }

    return elements.map(element => {
      return <div key={element.id}>{element.name}</div>
    });
  }

  renderLoader = () => <div>LOADING...</div>;
  
  render() {
    const { beers, isLoading } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        { isLoading ? this.renderLoader() : this.renderList(beers)}
      </div>
    );
  }
}

export default App;
