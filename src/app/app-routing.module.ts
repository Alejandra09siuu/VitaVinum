import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },  
    { path: 'acercade', component: AcercadeComponent }, 
    { path: 'bebidas', component: BebidasComponent},
    { path: '**', component: InicioComponent }, 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
