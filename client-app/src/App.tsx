import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import List from 'semantic-ui-react/dist/commonjs/elements/List/List';

class App extends Component {
  state = {
    values: []
  };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:5000/api/values');
    this.setState({
      values: response.data
    });
  }
  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivties</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => {
            return <List.Item key={value.id}>{value.name}</List.Item>;
          })}
        </List>
      </div>
    );
  }
}

export default App;
