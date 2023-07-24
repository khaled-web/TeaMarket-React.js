//..............
//importingData
//..............
//cors(fetchingData)
const cors = require('cors')
//express
const express = require('express');
const app = express()
//env
require('dotenv').config()
//express-async-errors instead of try-catch
require('express-async-errors')
//ConnectDB
const connectDB = require('./db/connect.js')
//morgan
const morgan = require('morgan')
//routes
const userRoutes = require('./routes/UserRoutes.js')
//middleware
const notFoundMiddleware = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')
//authenticateUser
const authenticateUser = require('./middleware/auth-JWT.js')


//.........
//AppData
//.........

//morgan..infoTheWarningMessageOnConsole
if (process.env.NODE_ENV !== 'production') {
 app.use(morgan('dev'))
}
//cors-fetchingData
app.use(cors())
//usingData.jsonInPostman
app.use(express.json())
//GeneralRoute
app.get('/', (req, res) => {
 // throw new Error('error')
 res.json({
  msg: "Welcome"
 })
})

//routes
app.use('/api/v1', userRoutes)

//middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 4000

const start = async () => {
 try {
  await connectDB(process.env.MONGO_URL)
  app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
  })
 } catch (error) {
  console.log(error)
 }
}

start()