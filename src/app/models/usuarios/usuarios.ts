export interface Usuarios {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UsuariosAdress,
    phone: string,
    website: string,
    company: UsuariosCompany
}

export interface UsuariosCompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface UsuariosAdress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: UsuarioGeo
}

export interface UsuarioGeo {
    lat: string,
    lng: string
}

export interface UsuariosList {
    companyName: string,
    user: UsuariosBasic[]
}

export interface UsuariosBasic {
    id: number,
    name: string,
    email: string
}
