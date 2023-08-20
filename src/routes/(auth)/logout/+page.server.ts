import { redirect, type Cookies } from '@sveltejs/kit'
import { session_cookie_name } from '$lib/server/session.js'

export const load = async ({ cookies }: {cookies: Cookies}) => {
    cookies.delete(session_cookie_name)
    console.log('logging out ...')
    throw redirect(303, '/login')
}