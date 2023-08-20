import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types.js'
import { getSession } from '$lib/session.js'

export const load: LayoutServerLoad = async ({ cookies }) => {
    const session = await getSession(cookies)
    console.log({ session, location: 'server layout' })

    if (session === null || session === undefined)
        throw redirect(303, '/login')
    else
        return session
}