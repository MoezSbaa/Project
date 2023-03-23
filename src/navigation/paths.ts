import {constructPath} from "../utils/routing";

const authPrefix = constructPath('auth');

export const UnauthorizedPaths = {
    login: constructPath(authPrefix, 'login'),
    register: constructPath(authPrefix, 'register'),
    registerUser: constructPath(authPrefix, 'register-user'),
    registerCoach: constructPath(authPrefix, 'register-coach'),
    forgetPassword: constructPath('forget-password'),
    resetPassword: constructPath('reset-password/:id')
}

export const AuthorizedPaths = {
    dashboard: constructPath( 'dashboard'),
    profile: constructPath('dashboard', 'profile')

}