import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types.js'

export const load: LayoutServerLoad = async ({ cookies }) => {
    const sessionid = cookies.get('sessionid')
    console.log({ sessionid, location: 'server layout' })
    // TODO: validate cookie
    if (sessionid === null || sessionid === undefined) throw redirect(303, '/login')
    const user = sessionid // TODO
    return { user }
}