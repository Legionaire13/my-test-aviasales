import React, { useState } from "react"
import Filter from "./components/Filter/Filter"
import Tickets from "./components/Tickets/Tickets"
import getTickets from "./getTickets"
import Logo from "./components/Logo/Logo"
import "./App.css"

function App() {
  let [filters, setFilters] = useState([
    {
      name: "transfers-all",
      label: "Все",
      checked: false
    },
    {
      name: "transfers-0",
      label: "Без пересадок",
      checked: false
    },
    {
      name: "transfers-1",
      label: "1 пересадка",
      checked: false
    },
    {
      name: "transfers-2",
      label: "2 пересадки",
      checked: false
    },
    {
      name: "transfers-3",
      label: "3 пересадки",
      checked: false
    }
  ])

  const handleFilter = (event) => {
    event.preventDefault()

    event.target.name !== "transfers-all"
      ? setFilters(
          filters.map((filter) => {
            if (event.target.name === filter.name) {
              filter.checked = !filter.checked
            }

            return filter
          })
        )
      : setFilters(
          filters.map((filter) => {
            filter.checked = event.target.checked

            return filter
          })
        )
  }

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
        <Tickets />
      </main>
    </article>
  )
}

export default App
