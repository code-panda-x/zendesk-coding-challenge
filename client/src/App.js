import React, {Component} from 'react'
import Modal from 'react-modal'
import { fetchAllTickets } from './api/api';
import { groupTickets } from './Tickets/groupTickets';
import { formatDate } from './Tickets/formatDate';
import AllTickets from './Tickets/List';
import './App.css';

class App extends Component {
  state = {
    tickets: null,
    error: null,
    currentPage: 0,
    ticketsPerPage: 25,
    selectedTicket: undefined
  }

  componentDidMount() {
    fetchAllTickets()
      .then(res => {
        if (res === 'Network Error') {
          this.setState({error: {message: "Network Error! check local server"}})}
        else if(res === 404) {
          this.setState({error: {message: "API Not Found"}})} 
        else if (res === 401) {
          this.setState({error: {message: "Authentication Error"}})} 
        else {
          this.setState({ tickets: res})}
      })
      .catch(error => this.setState({ error }))
  }

  // Set states 
  changePage = (number) => {
    this.setState({ currentPage: number})
  }

  selectTicket = (id) => {
    const selectedTicket = this.state.tickets.filter(ticket => ticket.id === id)
    this.setState({ selectedTicket: selectedTicket})
  }

  clearSelectedTicket = () => {
    this.setState({ selectedTicket: undefined})
  }

  render() {
    const { tickets, ticketsPerPage, error, currentPage, selectedTicket} = this.state
    const groupedTickets = tickets && groupTickets(tickets, ticketsPerPage)
    const pageNumbers = groupedTickets && groupedTickets.map((group, index) => index)

    return (
      <div className="App">
        <header className="header">
            <h1>Ticket Viewer</h1>
        </header>
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
                    tickets={groupedTickets ? groupedTickets[currentPage] : null} 
                    currentPage={currentPage}
                    pageNumbers={pageNumbers}
                    changePage={this.changePage}  
                    selectTicket={this.selectTicket}
                  />
                ):
                (
                  <text>Loading tickets</text>
                )
              }
              <Modal
                isOpen={!!selectedTicket}
                contentLabel="Ticket Details"
                onRequestClose={this.clearSelectedTicket}
                closeTimeoutMS={200}
                className="modal"
              >
              {selectedTicket && 
                <div>
                  <h2>Subject: {selectedTicket[0].subject}</h2>
                  <p className="text-center"> Requester ID: {selectedTicket[0].requester_id}</p>
                  <p className="ticket-modal__description">Detail: {selectedTicket[0].description}</p> 
                <div className="ticket-list-item__header">
                  <p className="text-left"></p>
                    <p>
                      <span className="date">{formatDate(selectedTicket[0].created_at)}</span> 
                      <span className="right"> Status: {selectedTicket[0].status}</span>
                    </p>
                  </div>
                </div>
              }
              <button className="button" onClick={this.clearSelectedTicket}>Back to all tickets</button>
            </Modal>      
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
