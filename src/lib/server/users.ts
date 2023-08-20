import { eq } from "drizzle-orm"
import { db } from "./db"
import { users_table, type User } from "./schema"

export function addUser(user: User) {
    db.insert(users_table).values(user).run()
}

export function getUser(email: string): User | undefined {
    const us = db.select().from(users_table).where(eq(users_table.email, email)).all()
    //console.log({us})
    return us[0]
}