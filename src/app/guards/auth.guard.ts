import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from "@angular/router";
import { UsersService } from "../services/users/users.service";
import { Observable, of, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate, CanMatch {
  constructor(
    private authService: UsersService, // Cambia el nombre a usersService si prefieres mantener consistencia
    private router: Router
  ) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    const isAuthenticated = this.authService.isAuthenticated(); // Verifica si el usuario está autenticado

    if (!isAuthenticated) {
      this.router.navigate(["./auth/login"]); // Redirige al login si no está autenticado
      return of(false); // Devuelve un Observable<boolean> con valor false
    }

    return of(true); // Devuelve un Observable<boolean> con valor true
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}