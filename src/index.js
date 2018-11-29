// @flow
const jsonServer = require('json-server')
const db = require('../db/db.json')
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4058

server.use(middlewares)

// @see https://medium.com/mindorks/creating-a-random-number-generator-in-javascript-5dfc6f7a3bee
const randomNumber = (min, max) => {
  let random_number = Math.random() * (max - min) + min
  return Math.floor(random_number)
}

const randomElementInArray = array =>
  array[randomNumber(0, array.length)]

server.get('/compliment/random', (req, res) =>
  res.jsonp(randomElementInArray(db.compliments)))

server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`)
})
