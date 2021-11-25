import React from 'react'
import ListItem from './ListItem'

const AllTickets = (props) => (
  <div className="ticket-list">
    <h2 className="ticket-list__title"> Total {props.ticketCount} tickets, {props.ticketsPerPage} on this page</h2>
    {props.tickets &&
        props.tickets.map(ticket => 
        <ListItem key={ticket.id} ticket={ticket} selectTicket={props.selectTicket} />)
    }
    <ul className="page-selector">
        { props.pageNumbers &&
          props.pageNumbers.map(page => (
            (
              <li 
                className={page === props.currentPage ? "current-page page-selector__link" : "page-selector__link"}
                key={page} 
                id={page} 
                onClick={() => props.changePage(page)}
                >{page + 1}
              </li>
            )
          ))
        }
    </ul>
  </div>
)

export default AllTickets