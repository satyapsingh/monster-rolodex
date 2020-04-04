import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this); // for custom method have to bind this
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users}));
  }
  // custom methods
  // handleChange(e) {
  //   this.setState({searchField : e.target.value})
  // }

  // arrow function by default set the scope of this
  handleChange = e => (
    this.setState({searchField: e.target.value})
  );

  render() {
    // destruction 
    const {monsters, searchField} = this.state;
    // this is smilar of 
    // const monsters = this.state.monsters;
    // const searchField = this .state.searchField;
    const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase())
          );

    return (
      
      <div className="App">
        <h1> Monster rolodex </h1>
        <SearchBox  placeholder = "search monsters"
            handleChange = { this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
        
      </div>
    );
  }
}

export default App;
