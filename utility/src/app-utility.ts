
import { BehaviorSubject, Observable } from 'rxjs';

interface Authentication {
    authToken: string,
    isLogged: boolean,
    userData: {
        name: string
    },
}

const authKeyLocalStorage = 'auth';
const userDataKeyLocalStorage = 'userData';

const authState = new BehaviorSubject<Authentication>({ authToken: '', isLogged: false, userData: { name: '' } });

function getSession(): BehaviorSubject<Authentication> {

    const sessionData = JSON.parse(window.localStorage.getItem(authKeyLocalStorage));

    authState.next(sessionData ?? { authToken: '', isLogged: false, userData: { name: '' } })

    return authState;

}

function removeSession() {

    localStorage.removeItem(authKeyLocalStorage)
    authState.next({
        authToken: '',
        isLogged: false,
        userData: {
            name: ''
        }
    })
}

function saveSession(data: Authentication) {

    window.localStorage.setItem(authKeyLocalStorage, JSON.stringify(data));
    authState.next(JSON.parse(window.localStorage.getItem(authKeyLocalStorage)))
}


interface UserCredentials {
    login: string,
    password: string,
    name: string
}


function SessionUserDataManagement() {

    const saveUserData = (userData: any) => {
        window.localStorage.setItem(userDataKeyLocalStorage, JSON.stringify(userData));
    }

    const getUserData = () => {
        return window.localStorage.getItem(userDataKeyLocalStorage);
    }

    const dropUserData = () => {
        window.localStorage.removeItem(userDataKeyLocalStorage);
    }

    return {
        saveUserData,
        getUserData,
        dropUserData
    }
}

function AuthenticationManagement() {

    const login = (credentials: UserCredentials) => {

        saveSession({
            authToken: 'youareloggedin',
            isLogged: true,
            userData: {
                name: credentials.name
            },
        })

        return authState.asObservable();

    }

    const logoff = () => {
        removeSession();

        return authState.asObservable();
    }

    const getSession = () => {
        return authState.asObservable();
    }

    return {
        login,
        logoff,
        getSession
    }
}

interface MFERoute {
    url: string
}

const keys = ['dashboard', 'signin', 'signup'] as const

const MFERoutes = new Map<Keys, MFERoute>([
    ['dashboard', { url: `dashboard/home` }],
    ['signin', { url: `angular1/signin` }],
    ['signup', { url: `angular2/signup` }]
])

type Keys = typeof keys[number]

type MFERoutType<T extends Map<any, any>> = {
    [K in T extends Map<infer U, any> ? U : never]?: string;
}


type MFERouteObjectType = MFERoutType<typeof MFERoutes>;

function config(){

    return {    
        api_url: process.env['API_URL']
    }
}

export { config, Authentication, AuthenticationManagement, SessionUserDataManagement, MFERoute, MFERouteObjectType, MFERoutes, UserCredentials, getSession, removeSession, saveSession };

