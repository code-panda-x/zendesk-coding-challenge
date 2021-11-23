
  export const groupTickets = (tickets, groupSize) => {
    let grouped = []
    let current = []
  
    // Group all tickets by the size of 25
    tickets.map((item, index) => {
        // Tickets reach 25, Push current to grouped
      if (index % groupSize === 0 && index !== 0) {
        grouped.push(current)
        current = []
      }
      // Add tickets to current group if group size < 25
      return current.push(item)
    })
    // Push leftover tickets to grouped
    grouped.push(current)
  
    return grouped
  }