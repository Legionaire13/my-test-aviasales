import React from "react"
import "./Filter.scss"

export default function Filter({ filters, onChange }) {
  const labels = {
    all: "Все",
    zero: "Без пересадок",
    one: "1 пересадка",
    two: "2 пересадки",
    three: "3 пересадки",
  }

  const renderFilter = ({ name, checked }, i) => {
    return (
      <li className="filter__item" key={`option-${i}`}>
        <input
          id={name}
          name={name}
          className={`visually-hidden filter__input ${
            checked ? `filter__input--checked` : ``
          }`}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <label className="filter__label" htmlFor={name}>
          {labels[name]}
        </label>
      </li>
    )
  }

  return (
    <ul className="filter list">
      <h2 className="filter__headline">Количество пересадок</h2>
      {filters.map((item, i) => renderFilter(item, i))}
    </ul>
  )
}
