import axios from 'axios'

export function fetchAllTickets() {
  return axios.get('http://localhost:7000')
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.message
    })
}
