import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json'
import AllTickets from '../../Tickets/List';
import tickets from '../fixtures/tickets'

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render TicketList correctly', () => {
  const wrapper = shallow(<AllTickets tickets={tickets} ticketCount={tickets.length} ticketsPerPage={tickets.length} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render TicketList title correctly', () => {
  const wrapper = shallow(<AllTickets />)
  expect(wrapper.find('h2').length).toBe(1)
})

