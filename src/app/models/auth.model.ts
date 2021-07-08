export interface LoginModel{
    email: string
    password: string
}

export interface Tokens{
    accesToken: string
    refreshToken: string 
}

export interface RegistrationModel{
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

export interface StoreUserModel{
    id: number
    userName: string
    firstName: string
    lastName: string
    isEmailConfirmed: boolean
}

export interface ForgotPasswordModel{
    email: string
}