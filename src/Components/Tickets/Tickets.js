import React from "react"
import Ticket from "./Ticket/Ticket"
import "./Tickets.scss"

export default function Tickets() {
  return (
    <div className="tickets">
      <h2 className="visually-hidden">Билеты</h2>
      <ul className="tickets__button-list">
        <li>
          <button className="tickets__button tickets__button--left tickets__button--active">
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
        {/* вывести в цикле нужное количество */}
        <Ticket />
      </ul>
    </div>
  )
}
