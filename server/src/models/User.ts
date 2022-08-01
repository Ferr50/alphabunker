interface User {
    name:string,
    password:string,
    birthday:string,
    email:string,
    cpf:string,
}

interface LoginUser {
    cpf:string,
    password:string,
}

interface NewUser {
    id:string,
    name:string,
    password:string,
    email:string,
    cpf:string,
    birthday:string,
    timestamp:string
}

export {User, NewUser, LoginUser}