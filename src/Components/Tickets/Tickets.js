import React, { useState } from "react"
import Ticket from "./Ticket/Ticket"
import mocks from "../../mocks/mocks"
import "./Tickets.scss"

export default function Tickets() {
  let { sortedBy, setSortedBy } = useState("cheapest")

  const handleSorting = (str) => {
    setSortedBy(str)
  }

  // при изменении состояния повесить класс и проапдейтить стейт

  return (
    <div className="tickets">
      <h2 className="visually-hidden">Билеты</h2>

      <ul className="tickets__button-list">
        <li>
          <button className={`tickets__button tickets__button--left tickets__button--active`}>
            Самый дешевый
          </button>
        </li>
        <li>
          <button className="tickets__button tickets__button--right">
            Самый быстрый
          </button>
        </li>
      </ul>

      <h3 className="visually-hidden">Список билетов</h3>
      <ul className="tickets__list">
        {mocks.map((ticket) => (
          <Ticket details={ticket} />
        ))}
      </ul>
    </div>
  )
}
