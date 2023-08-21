import { and, eq } from "drizzle-orm"
import { db } from "./db"
import { patents_table, type Patent, type NewPatent } from "./schema"

export function deletePatent({id, user}: {id: number, user: string}) {
    db.delete(patents_table).where(and(eq(patents_table.id, id), eq(patents_table.user, user))).run()
}

export async function postPatent(patent: NewPatent) {
    //console.log({patent})
    return db
        .insert(patents_table)
        .values(patent)
        .onConflictDoUpdate({target: patents_table.id, set: patent})
        .returning()
        .all()
}

export function getPatents(user: string) {
    return db.select().from(patents_table).where(eq(patents_table.user, user)).all()
}