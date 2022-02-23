
function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    const recommendation = isSpring ? (
        <div>C'est le printemps, rempotez !</div>) : (
        <div>Ce n'est pas le moment de remporter</div>)

    return recommendation
}

export default Recommendation