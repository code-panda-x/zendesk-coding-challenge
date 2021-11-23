import React, {Component} from 'react'
import { fetchAllTickets } from './api/api';
import './App.css';

class App extends Component {
  state = {
    tickets: null,
    error: null
  }

  componentDidMount() {
    fetchAllTickets()
      .then(res => {
        if(res === 404) {
          this.setState({error: {message: "API Not Found"}})
        } else if (res === 401) {
          this.setState({error: {message: "Authentication Error"}})
        } else if (res === 'Network Error') {
          this.setState({error: {message: "Network Error! check local server"}})
        } else {
          this.setState({ tickets: res})
        }
      })
      .catch(error => this.setState({ error }))
  }

  render() {
    const {error} = this.state
    return (
      <div className="App">
        {
          error ? 
          (
            <p>Ohhh no~ There's an error: 
            <span> {error.message}</span>
            </p>
          ) : 
          (
            <div>succeed</div>
          )
        }      
      </div>
    );
  }
}

export default App;
