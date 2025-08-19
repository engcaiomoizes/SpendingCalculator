import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map, take } from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.user$.pipe(
        take(1), // Pegar apenas o valor atual
        map(user => {
            if (user) {
                return true; // Usuário logado, permite acesso
            } else {
                router.navigate(['/login']); // Redirection se não estiver logado
                return false;
            }
        })
    );
};