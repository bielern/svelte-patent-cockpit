import Iron from '@hapi/iron';

import type { Cookies } from "@sveltejs/kit";

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