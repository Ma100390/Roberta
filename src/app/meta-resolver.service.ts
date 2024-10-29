import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MetaResolver implements Resolve<{ title: string; description: string }> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Ritorna un oggetto con `title` e `description` dai dati della rotta, o valori di default
    return {
      title: route.data['title'] || 'Titolo di Default',
      description: route.data['description'] || 'Descrizione di default per SEO.'
    };
  }
}
