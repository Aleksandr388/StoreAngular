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
    email: string
    firstName: string
    lastName: string
    isEmailConfirmed: boolean
    currentPassword: string
    newPassword: string
}

export interface ForgotPasswordModel{
    email: string
}