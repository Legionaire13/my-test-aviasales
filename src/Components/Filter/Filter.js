import React from "react"
import "./Filter.scss"

export default function Filter(props) {
  let { filters, onChange } = props

  const renderFilter = (filter, i) => {
    const classes = []

    if (filter.checked) {
      classes.push("filter__input--checked")
    }

    return (
      <li className="filter__item" key={`option-${i}`}>
        <input
          id={filter.name}
          name={filter.name}
          className={`visually-hidden filter__input ${ (filter.checked) ?  classes.join("") : ""}`}
          type="checkbox"
          checked={filter.checked}
          onChange={onChange}
        />
        <label className="filter__label" htmlFor={filter.name}>
          {filter.label}
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
