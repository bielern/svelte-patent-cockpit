import { redirect, fail } from '@sveltejs/kit';

export const actions = {
    default: async ({request, cookies}) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password'); // TODO

        console.log({email, password}) // TODO

        if (password === 'password') {
            cookies.set('sessionid', email ?? '') // TODO
            throw redirect(303, '/')
        } else {
            return fail(400, {error: 'invalid user or password'})
        }
    },
}