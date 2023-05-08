import {action, computed, makeObservable, observable} from "mobx";

enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

interface UserCredentials {
    username: string;
    password: string;
}

interface User {
    userId: string;
    username: string;
    role: Role;
}

class userSession {
    user: User | null;
    private token: string | null;

    constructor() {
        makeObservable(this, {
            user: observable,
            login: action,
            logout: action,
            isLoggedIn: computed
        });
        this.user = null;
        this.token = null;
    }

    public login(userCredentails: UserCredentials) {
        //TODO: call api to login
    }

    public logout() {
        this.user = null;
        this.token = null;
    }

    public get isLoggedIn() {
        //TODO: check if token is valid
        return this.user !== null;
    }
}

const userSessionStore = new userSession();
export default userSessionStore;