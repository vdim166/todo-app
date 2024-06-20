import express from "express"
import sequelize from "./db/database"
import config from "config"

const PORT = config.get("PORT") || 3000

const run = () => {
  const app = express()

  app.use(express.json())

  sequelize
    .sync()
    .then(() => {
      console.log("Database connection has been established")
    })
    .catch((err: Error) => {
      console.error("Unable to connect to the database:", err.message)
    })

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

run()
