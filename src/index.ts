import express from 'express'

const app: express.Express = express()

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const router: express.Router = express.Router();
