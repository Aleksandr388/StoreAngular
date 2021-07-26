import { ForgotPasswordModel, LoginModel, RegistrationModel } from "src/app/models/auth.model";

export class Login {
    static readonly type = '[Auth] Login';

    constructor(public payload: LoginModel) { }
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

export class Registration {
    static readonly type = '[Auth] Registration';

    constructor(public payload: RegistrationModel) { }
}

export class ForgotPassword {
    static readonly type = '[Auth] ForgotPassword';

    constructor(public payload: ForgotPasswordModel) { }
}

export class RestoreToken {
    static readonly type = '[Auth] RestoreToken';
}
