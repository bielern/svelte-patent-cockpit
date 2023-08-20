import type { InferModel } from 'drizzle-orm';

import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users_table = sqliteTable('users', {
    //id: integer().autoIncrement().primaryKey(),
    email: text('email').notNull().primaryKey(),
    hashed_password: text('hashed_password').notNull(),
    //unique_email: uniqueIndex('email')
})

export type User = InferModel<typeof users_table>