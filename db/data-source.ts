import "reflect-metadata"; // todo 用处
import { DataSource, DataSourceOptions } from "typeorm"
import { User, UserAuth, Articles, Comment, Tag } from "./entity";

console.log('process.env---------------->',process.env.DATABASE_TYPE)
console.log('process.env---------------->',process.env.DATABASE_HOST)
console.log('process.env---------------->',process.env.DATABASE_PORT)
console.log('process.env---------------->',process.env.DATABASE_USERNAME)
console.log('process.env---------------->',process.env.DATABASE_PWD)
console.log('process.env---------------->',process.env.DATABASE_NAME)

export const AppDataSource = new DataSource({
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PWD,
    database: process.env.DATABASE_NAME,
    // 把涉及的表引进来
    entities: [
        User,
        UserAuth,
        Articles,
        Comment,
        Tag,
    ],
    synchronize: false,
    logging: false,
    subscribers: [],
    migrations: [],
} as DataSourceOptions)
