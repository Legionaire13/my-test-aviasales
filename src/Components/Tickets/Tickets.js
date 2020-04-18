import React from "react"
import Ticket from "./Ticket/Ticket"
import Loader from "./Loader/Loader"
import "./Tickets.scss"

export default function Tickets({ tickets, sorting, handleSorting, loading }) {
  return (
    <div className="tickets">
      <h2 className="visually-hidden">Билеты</h2>

      <ul className="tickets__button-list">
        <li>
          <button
            className={`tickets__button tickets__button--left ${
              sorting ? `tickets__button--active` : ``
            }`}
            onClick={handleSorting}>
            Самый дешевый
          </button>
        </li>
        <li>
          <button
            className={`tickets__button tickets__button--right ${
              sorting ? `` : `tickets__button--active`
            }`}
            onClick={handleSorting}>
            Самый быстрый
          </button>
        </li>
      </ul>

      <h3 className="visually-hidden">Список билетов</h3>
      <ul className="tickets__list">
        {loading ? (
          <Loader />
        ) : (
          tickets.map((ticket, i) => <Ticket details={ticket} key={`t${i}`} />)
        )}
      </ul>
    </div>
  )
}
