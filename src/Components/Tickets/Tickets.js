import React from "react"
import Ticket from "./Ticket/Ticket"
import "./Tickets.scss"

export default function Tickets(props) {
  const { tickets, sorting, handleSorting } = props

  return (
    <div className="tickets">
      <h2 className="visually-hidden">Билеты</h2>

      <ul className="tickets__button-list">
        <li>
          <button
            className={`tickets__button tickets__button--left ${
              sorting ? `tickets__button--active` : ``
            }`} onClick={handleSorting}>
            Самый дешевый
          </button>
        </li>
        <li>
          <button
            className={`tickets__button tickets__button--right ${
              sorting ? `` : `tickets__button--active`
            }`} onClick={handleSorting}>
            Самый быстрый
          </button>
        </li>
      </ul>

      <h3 className="visually-hidden">Список билетов</h3>
      <ul className="tickets__list">
        {tickets.map((ticket, index) => (
          <Ticket details={ticket} key={`ticket_${index}`}/>
        ))}
      </ul>
    </div>
  )
}
