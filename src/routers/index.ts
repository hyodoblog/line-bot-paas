import express from 'express'
import { config, Line } from '../line.config'
import handlerEvent from '../handlers'

const router: express.Router = express.Router()

router.post('/', Line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handlerEvent))
    .then((result) => {
      console.log(result)
      res.status(200).end()
    })
    .catch((err) => {
      console.error(err)
      res.status(500).end()
    })
})

module.exports = router
