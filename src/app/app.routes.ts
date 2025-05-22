import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: "", component: MenuComponent},
    {
      path: 'business', // Ruta que activará la carga del módulo
      loadChildren: () => import('./business/business.module').then(m => m.BusinessModule),
    },
    
    // Otras rutas de tu aplicación...
  ];