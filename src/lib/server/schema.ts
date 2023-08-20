import type { InferModel } from 'drizzle-orm';

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users_table = sqliteTable('users', {
    //id: integer().autoIncrement().primaryKey(),
    email: text('email').notNull().primaryKey(),
    hashed_password: text('hashed_password').notNull(),
    //unique_email: uniqueIndex('email')
})

export type User = InferModel<typeof users_table>

export const patents_table = sqliteTable('patents', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    user: text('user').notNull().references(() => users_table.email, { onDelete: 'cascade' }),
})

export type Patent = InferModel<typeof patents_table>