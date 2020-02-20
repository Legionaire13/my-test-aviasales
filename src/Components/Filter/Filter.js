import React from "react"
import "./Filter.scss"

export default function Filter(props) {
  return (
    <ul className="filter list">
      <h2 className="filter__headline">Количество пересадок</h2>
      <li className="filter__item">
        <input
          id="transfers-all"
          className="visually-hidden filter__input"
          type="checkbox"
        />
        <label className="filter__label" htmlFor="transfers-all">
          Все
        </label>
      </li>
      <li className="filter__item">
        <input
          id="transfers-0"
          className="visually-hidden filter__input"
          type="checkbox"
          checked
        />
        <label className="filter__label" htmlFor="transfers-0">
          Без пересадок
        </label>
      </li>
      <li className="filter__item">
        <input
          id="transfers-1"
          className="visually-hidden filter__input"
          type="checkbox"
          checked
        />
        <label className="filter__label" htmlFor="transfers-1">
          1 пересадка
        </label>
      </li>
      <li className="filter__item">
        <input
          id="transfers-2"
          className="visually-hidden filter__input"
          type="checkbox"
          checked
        />
        <label className="filter__label" htmlFor="transfers-2">
          2 пересадки
        </label>
      </li>
      <li className="filter__item">
        <input
          id="transfers-3"
          className="visually-hidden filter__input"
          type="checkbox"
        />
        <label className="filter__label" htmlFor="transfers-3">
          3 пересадки
        </label>
      </li>
    </ul>
  )
}
