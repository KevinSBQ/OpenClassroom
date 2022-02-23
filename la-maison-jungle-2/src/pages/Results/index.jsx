function Results() {
  return (
    <div>
      <h1>Résultats</h1>
    </div>
  )
}

export default Results

export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
      return title
  }
  return `${title},`
}