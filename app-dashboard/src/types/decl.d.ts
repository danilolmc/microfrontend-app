declare module "@app/utility" {
    import { BehaviorSubject, Observable } from 'rxjs';
    interface Authentication {
        authToken: string;
        isLogged: boolean;
        userData: {
            name: string;
        };
    }
    function getSession(): BehaviorSubject<Authentication>;
    function removeSession(): void;
    function saveSession(data: Authentication): void;
    interface UserCredentials {
        login: string;
        password: string;
        name: string;
    }
    function SessionUserDataManagement(): {
        saveUserData: (userData: any) => void;
        getUserData: () => string;
        dropUserData: () => void;
    };
    function AuthenticationManagement(): {
        login: (credentials: UserCredentials) => Observable<Authentication>;
        logoff: () => Observable<Authentication>;
        getSession: () => Observable<Authentication>;
    };
    interface MFERoute {
        url: string;
    }
    const MFERoutes: Map<"dashboard" | "signin" | "signup", MFERoute>;
    type MFERoutType<T extends Map<any, any>> = {
        [K in T extends Map<infer U, any> ? U : never]?: string;
    };
    type MFERouteObjectType = MFERoutType<typeof MFERoutes>;
    function config(): {
        api_url: string;
    };
    export { config, Authentication, AuthenticationManagement, SessionUserDataManagement, MFERoute, MFERouteObjectType, MFERoutes, UserCredentials, getSession, removeSession, saveSession };
    
}
