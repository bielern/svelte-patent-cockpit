import { redirect } from '@sveltejs/kit'
import { session_cookie_name } from '$lib/session.js'

export const load = async ({ cookies }) => {
    cookies.delete(session_cookie_name)
    /// TODO remove cookie on the server as well if needed
    console.log('logging out ...')
    throw redirect(303, '/login')
}