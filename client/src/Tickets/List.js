import React from 'react'

const AllTickets = (props) => (
  <div className="ticket-list">
    <h2 className="ticket-list__title"> Total {props.ticketCount} tickets, {props.ticketsPerPage} on this page</h2>
  </div>
)

export default AllTickets