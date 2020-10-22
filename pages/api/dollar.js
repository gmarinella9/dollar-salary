export default (req, res) => {
  fetch('https://static.coins.infobae.com/cotizacion-simple/dolar-libre-riesgo.json')
  .then(d => (d.json()))
  .then(json => {
    res.statusCode = 200
    res.json(json)
  })
  // const posts = await res.json()
}
