import React from "react"
import "./Ticket.scss"

export default function Ticket() {
  // data output formatting
  const formatHandler = {
    numbers: new Intl.NumberFormat(`ru-RU`),
    stops: ["Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"],
    duration: (duration) => {
      const hours = (duration / 60).toFixed()
      const mins = ((duration / 60 - hours) * 60).toFixed()
      return `${hours}ч ${mins}м`
    },
    time: (departure, duration) => {
      const options = [
        "ru-RU",
        {
          hour: "numeric",
          minute: "numeric"
        }
      ]

      departure = Date.parse(departure)
      const arrival = new Date(departure + duration * 60 * 1000)
      departure = new Date(departure)

      return `${departure.toLocaleString(
        ...options
      )} - ${arrival.toLocaleString(...options)}`
    }
  }

  const mock = {
    price: 97960,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-03-02T23:19:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1589
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-03-23T12:07:00.000Z",
        stops: ["AUH", "SHA", "DXB"],
        duration: 1394
      }
    ]
  }

  function renderSegments(arr) {
    return arr.map((item) => {
      const { origin, destination, date, stops, duration } = item

      return (
        <table className="ticket__table">
          <thead>
            <tr>
              <th className="ticket__col1">
                {origin} - {destination}
              </th>
              <th className="ticket__col2">В пути</th>
              <th className="ticket__col3">
                {formatHandler.stops[stops.length]}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ticket__col1">
                {formatHandler.time(date, duration)}
              </td>
              <td className="ticket__col2">
                {formatHandler.duration(duration)}
              </td>
              <td className="ticket__col3">{stops.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      )
    })
  }

  const { price, carrier, segments } = mock

  return (
    <li>
      <article className="ticket">
        <header className="ticket__header">
          <span className="ticket__price">
            {formatHandler.numbers.format(price)} Р
          </span>
          <img
            className="ticket__logo"
            src={`//pics.avs.io/99/36/{${carrier}}.png`}
            alt="Логотип авиалинии"
          />
        </header>

        <main className="ticket__body">
          {renderSegments(segments)}
          {/* <table className="ticket__table">
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
          </table> */}
        </main>
      </article>
    </li>
  )
}
