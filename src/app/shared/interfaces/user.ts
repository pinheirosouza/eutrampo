export interface User {
    name?: string;
    bio?: string;
    cpf?: number;
    gender?: string;
    // birthdate: req.body.birthdate,       
    phone?: number;
    email?: string;
    password?: any;
    userHiredServices?: number;
    userPeformedServices?: number;
    image?: string;
}
