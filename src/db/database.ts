import { Sequelize } from "sequelize"
import config from "config"

const sequelize = new Sequelize(config.get("DATABASE_URL"), {
  dialect: "postgres",
  logging: false,
})

export default sequelize
