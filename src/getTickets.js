export default async function getTickets() {
  async function getSearchId() {
    console.log(`...getting an ID for tickets request`)
    let response
    // получаем searchID
    try {
      response = await fetch(`https://front-test.beta.aviasales.ru/search`)
    } catch (e) {
      console.error(e.error)
    }

    const { searchId } = await response.json()
    return searchId
  }

  // получаем массив с билетами
  async function getTicketsTotalArr(searchId) {
    console.log(`...getting total array of tickets`)
    let response

    try {
      response = await fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      )
    } catch (e) {
      console.error(e.error)
    }

    if (response.ok) {
      return !response.stop
        ? ((response = await response.json()),
          (totalTicketsArr = [...totalTicketsArr, ...response.tickets]),
          getTicketsTotalArr(searchId))
        : totalTicketsArr
    }

    if (response.status >= 500) return getTicketsTotalArr(searchId)
  }

  const searchID = await getSearchId()
  let totalTicketsArr = []
  await getTicketsTotalArr(searchID)

  return totalTicketsArr
}

// await getTickets()
