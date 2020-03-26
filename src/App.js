import React, { useState, useEffect } from "react"
import Filter from "./components/Filter/Filter"
import Tickets from "./components/Tickets/Tickets"
import getTickets from "./getTickets"
import getTicketsFiltered from "./getTicketsFiltered"
import getTicketsSorted from "./getTicketsSorted"
import Logo from "./components/Logo/Logo"
import "./App.css"

function App() {
  let [isCheapest, setIsCheapest] = useState(true)
  let [filters, setFilters] = useState([
    {
      name: "transfers-all",
      label: "Все",
      checked: false,
      stops: 3,
    },
    {
      name: "transfers-0",
      label: "Без пересадок",
      checked: true,
      stops: 0,
    },
    {
      name: "transfers-1",
      label: "1 пересадка",
      checked: true,
      stops: 1,
    },
    {
      name: "transfers-2",
      label: "2 пересадки",
      checked: true,
      stops: 2,
    },
    {
      name: "transfers-3",
      label: "3 пересадки",
      checked: false,
      stops: 3,
    },
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

  const useFetchRequest = (filters, isCheapest) => {
    const [result, setResult] = useState([])

    useEffect(() => {
      async function fetchRequest() {
        let response = await getTickets()
        response = getTicketsFiltered(response, filters)
        response = getTicketsSorted(response, isCheapest)
        response.length = 5

        setResult(response)
      }

      fetchRequest()
    }, [filters, isCheapest])

    return result
  }

  const handleSorting = () => setIsCheapest(!isCheapest)

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
        <Tickets
          tickets={useFetchRequest(filters, isCheapest)}
          sorting={isCheapest}
          handleSorting={handleSorting}
        />
      </main>
    </article>
  )
}

export default App
