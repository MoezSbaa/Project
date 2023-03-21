import {constructPath} from "../utils/routing";

const authPrefix = constructPath('auth');

export const UnauthorizedPaths = {
    login: constructPath(authPrefix, 'login'),
    register: constructPath(authPrefix, 'register'),
}

export const AuthorizedPaths = {
    home: constructPath( 'home'),
}