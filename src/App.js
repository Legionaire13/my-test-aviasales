import React from "react"
import Filter from "./Components/Filter/Filter"
import Tickets from "./Components/Tickets/Tickets"
import Logo from "./Components/Logo/Logo"
import "./App.css"

function App() {
  return (
    <article className="App">
      <h1 className="visually-hidden">Лучшие варианты перелетов</h1>
      <header className="logo">
        <a href="https://www.aviasales.com">
          <Logo />
        </a>
      </header>
      <main className="main">
        <Filter />
        <Tickets />
      </main>
    </article>
  )
}

export default App
