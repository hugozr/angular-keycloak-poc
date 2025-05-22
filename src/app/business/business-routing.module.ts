import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapabilityListComponent } from './capability-list/capability-list.component';

const routes: Routes = [
  { path: '', component: CapabilityListComponent }, // Ruta principal del módulo
  // Otras rutas del módulo si las hay...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }