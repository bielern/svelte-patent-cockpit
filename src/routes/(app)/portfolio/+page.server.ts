import { deletePatent, postPatent, getPatents } from '$lib/server/patents.js'

export const load = async ({locals}) => {
    return { portfolio: getPatents(locals.session.user) }
}

// This looks a bit weird. There should be better ways. E.g. based on DB Schema or derived type
export const actions = {
    post: async ({request, locals}) => {
        const formData = await request.formData()
        const name = formData.get('name') as string
        const id = parseInt(formData.get('id') as string)
        const {session: {user}} = locals
        postPatent({name, id: isNaN(id) ? undefined : id, user})
    },
    delete: async ({request, locals}) => {
        const formData = await request.formData()
        const id = parseInt(formData.get('id') as string)
        const {session: {user}} = locals
        deletePatent({id, user})
    }
}