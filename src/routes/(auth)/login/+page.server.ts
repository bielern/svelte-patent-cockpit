import { redirect, fail } from '@sveltejs/kit';
import { session_cookie_name, session2cookie } from '$lib/session.js';
import { SESSION_PASSWORD } from '$env/static/private';

// TODO: go to a DB or so
function createSession(email: string, password: string) {
    console.log({email, password}) // TODO
    if (password === 'password') {
        return {user: email}
    } else {
        return undefined
    }
}

export const actions = {
    default: async ({request, cookies}) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password') as string;

        const session = createSession(email, password)

        if (session) {
            const cookie = await session2cookie(session, SESSION_PASSWORD)
            if (!cookie) 
                throw fail(500, {error: 'failed to create session'})   
            cookies.set(session_cookie_name, cookie) 
            throw redirect(303, '/')
        } else {
            return fail(400, {error: 'invalid user or password'})
        }
    },
}