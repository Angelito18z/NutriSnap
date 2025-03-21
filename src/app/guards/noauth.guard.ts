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
export class NoAuthGuard implements CanActivate, CanMatch {
  constructor(private authService: UsersService, private router: Router) {}

  private checkNotAuthenticated(): boolean | Observable<boolean> {
    const isAuthenticated = this.authService.isAuthenticated(); // Verifica si está autenticado

    if (isAuthenticated) {
      this.router.navigate(["/landing"]); 
      return of(false);
    }

    return of(true);
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    return this.checkNotAuthenticated();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkNotAuthenticated();
  }
}
