import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies }) => {
    cookies.delete('sessionid')
    /// TODO remove cookie on the server as well if needed
    console.log('logging out ...')
    throw redirect(303, '/login')
}