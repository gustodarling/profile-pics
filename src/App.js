import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      profiles: [
        // {
        //   name: 'Github',
        //   id: '001'
        // },
        // {
        //   name: 'Twitter',
        //   id: '002'
        // },
        // {
        //   name: 'Google',
        //   id: '003'
        // }
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ profiles: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.profiles.map(profile => (
            <h1 key={profile.id}> { profile.name } </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
