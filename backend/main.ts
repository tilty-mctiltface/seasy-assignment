import express, { Express } from 'express'
import dotenv from 'dotenv'
import router from './app/router/index'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(router)
  
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
})

app.on('error', () => console.log('Sir we have exploded.'))