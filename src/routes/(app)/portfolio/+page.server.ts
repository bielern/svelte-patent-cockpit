import { deletePatent, postPatent, getPatents } from '$lib/server/patents.js'

//interface Patent {
//    id?: number;
//    name: string;
//    user: string;
//}
//
//let db: Patent[] = [
//    { id: 1, name: 'EP1234567', user: 'info@noahbieler.com' }
//]
//
//function deletePatent({id, user}: {id: number, user: string}) {
//    db = db.filter(patent => !(patent.id === id && patent.user === user))
//}
//
//function postPatent(patent: Patent) {
//    const exists = patent.id !== undefined && db.find(p => p.id === patent.id)
//    if (exists) {
//        console.log('updating', patent)
//        db = db.map(p => patent.id === p.id ? patent : p)
//        return patent
//    } else {
//        console.log('adding', patent)
//        const id = db.length === 0 ? 1 : Math.max(...db.map(p => p.id ?? 0)) + 1
//        const withId = {...patent, id}
//        db.push(withId)
//        return withId
//    }
//}

export const load = async ({locals}) => {
    // TODO: make sure that the user is logged in
    return { portfolio: getPatents(locals.session.user) }
}

// TODO: make sure that the user is logged in
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