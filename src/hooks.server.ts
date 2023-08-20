import { fail, type Handle } from '@sveltejs/kit';
import { getSession } from '$lib/session';

const unprotected = /^\/(login|logout|signup)$/;

export const handle: Handle = async ({ event, resolve }) => {
    if (!unprotected.test(event.url.pathname)) {
        const cookies = event.cookies
        //const sessionId = cookies.get('sessionid')
        const session = await getSession(cookies)
        //console.log({sessionId, session})
        if (!session) {
            throw fail(401, {error: 'Unauthorized'})
        }
        event.locals.session = session
    }
    const response = await resolve(event);
    return response;
}
