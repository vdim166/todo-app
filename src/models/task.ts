import { DataTypes, Model } from "sequelize"
import sequelize from "../db/database"

class Task extends Model {
  public id!: number
  public title!: string
  public description?: string
  public status!: "pending" | "completed"
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.TEXT(),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      defaultValue: "pending",
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "tasks",
  }
)

export default Task
