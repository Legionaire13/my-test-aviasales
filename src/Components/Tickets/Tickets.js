import React, { useState } from "react"
import Ticket from "./Ticket/Ticket"
import mocks from "../../mocks/mocks"
import "./Tickets.scss"

export default function Tickets(props) {
  const { sortingConditions, handleSortingConditions } = props

  return (
    <div className="tickets">
      <h2 className="visually-hidden">Билеты</h2>

      <ul className="tickets__button-list">
        <li>
          <button
            className={`tickets__button tickets__button--left ${
              sortingConditions ? `tickets__button--active` : ``
            }`} onClick={handleSortingConditions}>
            Самый дешевый
          </button>
        </li>
        <li>
          <button
            className={`tickets__button tickets__button--right ${
              sortingConditions ? `` : `tickets__button--active`
            }`} onClick={handleSortingConditions}>
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
