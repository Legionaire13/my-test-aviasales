import React, { useState, useEffect } from "react"
import Filter from "./components/Filter/Filter"
import Tickets from "./components/Tickets/Tickets"
import getTickets from "./getTickets"
import getTicketsFiltered from "./getTicketsFiltered"
import getTicketsSorted from "./getTicketsSorted"
import Logo from "./components/Logo/Logo"
import mock from "./mock"
import "./App.css"

function App() {
  const initialState = {
    filters: [
      {
        name: "all",
        checked: false,
        stops: 3,
      },
      {
        name: "zero",
        checked: true,
        stops: 0,
      },
      {
        name: "one",
        checked: true,
        stops: 1,
      },
      {
        name: "two",
        checked: true,
        stops: 2,
      },
      {
        name: "three",
        checked: false,
        stops: 3,
      },
    ],
    isCheapest: true,
    loading: false,
  }
  const [appState, setAppState] = useState(initialState)

  const handleFilter = (e) => {
    e.preventDefault()

    return e.target.name !== "all"
      ? setAppState({
          ...appState,
          filters: appState.filters.map((filter) => {
            if (filter.name === "all") {
              filter.checked = false
            }

            if (e.target.name === filter.name) {
              filter.checked = !filter.checked
            }

            return filter
          }),
        })
      : setAppState({
          ...appState,
          filters: appState.filters.map((filter) => {
            filter.checked = e.target.checked

            return filter
          }),
        })
  }

  const handleSorting = () =>
    setAppState({
      ...appState,
      isCheapest: !appState.isCheapest,
    })

  const useFetchRequest = (appState) => {
    const [result, setResult] = useState([])
    const { filters, isCheapest } = appState

    useEffect(() => {
      async function fetchRequest() {
        // console.log("useEffect rendered!")
        setAppState({ ...appState, loading: true })

        let res = await getTickets()

        res = getTicketsFiltered(res, filters)
        res = getTicketsSorted(res, isCheapest)
        res.length = 5

        setAppState({ ...appState, loading: false })
        setResult(res)
      }

      fetchRequest()
    }, [filters, isCheapest])

    return result
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
        <Filter filters={appState.filters} onChange={handleFilter} />
        <Tickets
          tickets={useFetchRequest(appState)}
          sorting={appState.isCheapest}
          handleSorting={handleSorting}
          loading={appState.loading}
        />
      </main>
    </article>
  )
}

export default App
