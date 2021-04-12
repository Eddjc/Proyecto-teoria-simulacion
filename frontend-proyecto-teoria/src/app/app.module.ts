import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbardAdministradorComponent } from './componentes/navbard-administrador/navbard-administrador.component';
import { SidebardAdministradorComponent } from './componentes/sidebard-administrador/sidebard-administrador.component';
import { CrearAdministradorComponent } from './paginas/crear-administrador/crear-administrador.component';
import { LoginAdministradorComponent } from './paginas/login-administrador/login-administrador.component';
import { OrdenesComponent } from './paginas/ordenes/ordenes.component';
import { DashboardAdministradorComponent } from './paginas/dashboard-administrador/dashboard-administrador.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearOrdenComponent } from './paginas/crear-orden/crear-orden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbardAdministradorComponent,
    SidebardAdministradorComponent,
    CrearAdministradorComponent,
    LoginAdministradorComponent,
    OrdenesComponent,
    DashboardAdministradorComponent,
    CrearOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
