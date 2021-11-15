import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AlimentosService } from '../services/alimentos.service';
import { Store } from '@ngrx/store';
import { getIdUsuarioAuth } from 'src/app/authentication/store';


@Injectable({ providedIn: 'root' })
export class GetAlimentoUser implements Resolve<any> {

    constructor(private alimentoService: AlimentosService, private store: Store<any>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.alimentoService.getAlimentosByUser().pipe(take(1));
    }
}