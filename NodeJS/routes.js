import {resetDatabase, getAllCars, getCarsByID, buy} from './databaseUtils.js'
import express from 'express'
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  req.session.cart = req.session.cart || []
  next()
})

router.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Internal server error')
})

router.get('/', (req, res) => {
  const cars = getAllCars()
  const cart = req.session.cart.filter(id => cars.some(car => car.id === id))
  res.render('index', {cars, cart})
})

router.get('/cart', (req, res) => {
  const error = req.query.error ? true : null
  const cart = getCarsByID(req.session.cart)
  res.render('cart', {cart, error})
})

router.post('/cart', (req, res) => {
  req.session.cart.push(parseInt(req.body.id))
  res.redirect('/')
})

router.post('/remove', (req, res) => {
  req.session.cart = req.session.cart.filter(id => id !== parseInt(req.body.id))
  res.redirect('/cart')
})

router.post('/removeall', (req, res) => {
  req.session.cart = []
  res.redirect('/')
})

router.get('/reset', (req, res) => {
  resetDatabase()
  res.redirect('/')
})

router.post('/buy', (req, res, next) => {
  try {
      buy(req.session.cart)
      req.session.cart = []
      res.redirect('/')
  } catch (e) {
      req.session.cart = []
      console.log(e.stack)
      res.redirect('/cart?error=1')
  }
})

export default router
