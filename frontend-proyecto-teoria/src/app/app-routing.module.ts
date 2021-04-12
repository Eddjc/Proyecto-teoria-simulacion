import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenesComponent }from './paginas/ordenes/ordenes.component';
import { DashboardAdministradorComponent } from './paginas/dashboard-administrador/dashboard-administrador.component';
import { CrearOrdenComponent } from './paginas/crear-orden/crear-orden.component';
const routes: Routes = [
  { path: 'crear-orden', component: CrearOrdenComponent },
  {
    path: 'dashboard-administrador', component: DashboardAdministradorComponent, children: [
      { path: 'ordenes', component:OrdenesComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
