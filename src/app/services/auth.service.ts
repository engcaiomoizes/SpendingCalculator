import { Injectable } from "@angular/core";
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { from, Observable } from "rxjs";
import { User } from "firebase/auth";

@Injectable({ providedIn: 'root' })
export class AuthService {
    user$: Observable<User | null>;

    constructor(private auth: Auth) {
        this.user$ = authState(this.auth); // Retorna null se não estiver logado
    }

    login(email: string, password: string) {
        return from(signInWithEmailAndPassword(this.auth, email, password));
    }

    register(email: string, password: string) {
        return from(createUserWithEmailAndPassword(this.auth, email, password));
    }

    logout() {
        return from(signOut(this.auth));
    }
}