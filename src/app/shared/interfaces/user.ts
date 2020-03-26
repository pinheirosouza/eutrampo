export interface User {
    name?: string;
    bio?: string;
    cpf?: string;
    gender?: string;
    // birthdate: req.body.birthdate,       
    phone?: string;
    email?: string;
    password?: any;
    userHiredServices?: number;
    userPeformedServices?: number;
    image?: string;
}
