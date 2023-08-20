import type { Cookies } from "@sveltejs/kit";

export type Session = {
    user: string
}

// TODO
export function getSession(cookies: Cookies): Promise<Session | undefined> {
    const user = cookies.get('sessionid')
    return Promise.resolve(user ? {
        user
    } : undefined)
}