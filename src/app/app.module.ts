import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercadeComponent,
    PipesComponent,
    NavbarComponent,
    FooterComponent,
    BebidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
