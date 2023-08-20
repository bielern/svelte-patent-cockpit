import { redirect, type Handle } from '@sveltejs/kit';
import { getSession } from '$lib/server/session';
import { SESSION_PASSWORD } from '$env/static/private';


const unprotected = /^\/(login|logout|signup)$/;

export const handle: Handle = async ({ event, resolve }) => {
    if (!unprotected.test(event.url.pathname)) {
        const cookies = event.cookies
        //const sessionId = cookies.get('sessionid')
        const session = await getSession(cookies, SESSION_PASSWORD)
        //console.log({sessionId, session})
        if (!session) {
            //throw fail(401, {error: 'Unauthorized'})
            throw redirect(303, '/login') // {error: 'Unauthorized'})
        }
        event.locals.session = session
    }
    const response = await resolve(event);
    return response;
}
