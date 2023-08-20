export interface UserLogin {
    email: string
    hashed_password: string
}

let users = [] as UserLogin[]

export function addUser(user: UserLogin) {
    users.push(user)
}

export function getUser(email: string) {
    return users.find(u => u.email === email)
}