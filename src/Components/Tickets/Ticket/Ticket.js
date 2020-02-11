import React from "react"
import Logo from "../../../Assets/S7_Logo.png"
import "./Ticket.scss"

export default function Ticket() {
  return (
    <li>
      <article className="ticket">
        <header className="ticket__header">
          <span className="ticket__price">13 400 Р</span>
          <img className="ticket__logo" src={Logo} alt="Логотип авиалинии" />
        </header>

        <main className="ticket__body">
          <table className="ticket__table">
            <thead>
              <tr>
                <th className="ticket__col1">MOW - HKT</th>
                <th className="ticket__col2">В пути</th>
                <th className="ticket__col3">2 пересадки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ticket__col1">10:45 - 08:00</td>
                <td className="ticket__col2">21ч 15м</td>
                <td className="ticket__col3">HKG, JBN</td>
              </tr>
            </tbody>
          </table>
          <table className="ticket__table">
            <thead>
              <tr>
                <th className="ticket__col1">MOW - HKT</th>
                <th className="ticket__col2">В пути</th>
                <th className="ticket__col3">1 пересадка</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ticket__col1">11:20 - 00:50</td>
                <td className="ticket__col2">13ч 30м</td>
                <td className="ticket__col3">HKG</td>
              </tr>
            </tbody>
          </table>
        </main>
      </article>
    </li>
  )
}
