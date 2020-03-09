import React, { useState } from "react"
import Filter from "./components/Filter/Filter"
import Tickets from "./components/Tickets/Tickets"
import getTickets from "./getTickets"
import Logo from "./components/Logo/Logo"
import "./App.css"

function App() {
  let [sortCondition, setSortingCondition] = useState(true)
  let [filters, setFilters] = useState([
    {
      name: "transfers-all",
      label: "Все",
      checked: false,
      stops: 3
    },
    {
      name: "transfers-0",
      label: "Без пересадок",
      checked: false,
      stops: 0
    },
    {
      name: "transfers-1",
      label: "1 пересадка",
      checked: false,
      stops: 1
    },
    {
      name: "transfers-2",
      label: "2 пересадки",
      checked: false,
      stops: 2
    },
    {
      name: "transfers-3",
      label: "3 пересадки",
      checked: false,
      stops: 3
    }
  ])

  const handleFilter = (event) => {
    event.preventDefault()

    return event.target.name !== "transfers-all"
      ? setFilters(
          [...filters].map((filter) => {
            if (filter.name === "transfers-all") {
              filter.checked = false
            }

            if (event.target.name === filter.name) {
              filter.checked = !filter.checked
            }

            return filter
          })
        )
      : setFilters(
          [...filters].map((filter) => {
            filter.checked = event.target.checked

            return filter
          })
        )
  }

  const handleSorting = () => setSortingCondition(!sortCondition)

  return (
    <article className="App">
      <h1 className="visually-hidden">Лучшие варианты перелетов</h1>
      <header className="logo">
        <a href="https://www.aviasales.com">
          <Logo />
        </a>
      </header>
      <main className="main">
        <Filter filters={filters} onChange={handleFilter} />
        <Tickets sorting={sortCondition} handleSorting={handleSorting} />
      </main>
    </article>
  )
}

export default App

function getTicketsFiltered(pullOfTickets, filters) {
  let maxStops = 0

  filters.forEach((option) => {
    return option.checked && option.stops > maxStops
      ? (maxStops = option.stops)
      : false
  })

  return [...pullOfTickets].filter((ticket) => {
    const { segments } = ticket
    const [firstSegment, secondSegment] = segments

    return firstSegment.stops.length <= maxStops &&
      secondSegment.stops.length <= maxStops
      ? ticket
      : false
  })
}

function getTicketsSorted(filteredTickets, condition) {
  function sortByPrice(filteredTickets) {
    return [...filteredTickets].sort((t1, t2) => t1.price - t2.price)
  }

  function sortByDuration(filteredTickets) {
    return [...filteredTickets].sort(
      (t1, t2) => t1.segments[0].duration - t2.segments[0].duration
    )
  }

  return condition
    ? sortByPrice(filteredTickets)
    : sortByDuration(filteredTickets)
}
