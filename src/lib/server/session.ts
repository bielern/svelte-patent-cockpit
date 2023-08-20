import Iron from '@hapi/iron';
import argon2 from 'argon2'

import type { Cookies } from "@sveltejs/kit";
import { getUser, addUser } from './users';

export type Session = {
    user: string
}

export const session_cookie_name = 'session'

// password must only live on the server
export async function session2cookie(session: Session, password: string): Promise<string | undefined> {
    const sealed = await Iron.seal(session, password, Iron.defaults);
    return sealed;
}

export async function cookie2session(cookie: string, password: string): Promise<Session | undefined> {
    const unsealed = await Iron.unseal(cookie, password, Iron.defaults);
    return unsealed;
}

// TODO
export async function getSession(cookies: Cookies, password: string): Promise<Session | undefined> {
    //console.log({password})
    const cookie = cookies.get(session_cookie_name)
    return cookie ? cookie2session(cookie, password) : Promise.resolve(undefined)
}

// TODO: go to a DB or so
// TODO: verify password properly
// NOTE: also creates a new login & session, if user does not exist
export async function createSession(email: string, password: string) {
    //console.log({email, password}) // TODO
    const user = getUser(email)
    if (user) {
        const the_same = await argon2.verify(user.hashed_password, password)
        if (the_same)
            return {user: email}
        else
            return undefined
    } else {
        const hashed_password = await argon2.hash(password)
        addUser({email, hashed_password})
        return {user: email}
    }
}