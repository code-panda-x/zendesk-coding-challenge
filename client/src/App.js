import React, {Component} from 'react'
import { fetchAllTickets } from './api/api';
import { groupTickets } from './Tickets/groupTickets';
import AllTickets from './Tickets/List';

import './App.css';

class App extends Component {
  state = {
    tickets: null,
    error: null,
    currentPage: 0,
    ticketsPerPage: 25,
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
    const { tickets, ticketsPerPage, error, currentPage} = this.state
    const groupedTickets = tickets && groupTickets(tickets, ticketsPerPage)

    return (
      <div className="App">
        {
          error ? 
          (
            <p>Ohhh no~ There's an error: 
              <span> {error.message}</span>
            </p>
          ): 
          (
            <div>
              {
                tickets ? 
                (
                  <AllTickets
                    ticketCount={tickets && tickets.length}
                    ticketsPerPage={groupedTickets ? groupedTickets[currentPage].length : null}
                  />
                ):
                (
                  <text>Loading tickets</text>
                )
              }
            </div>
          )
        }      
      </div>
    );
  }
}

export default App;
