import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { ConversorComponent } from './Views/conversor/conversor.component';
import { HomeComponent } from './Views/home/home.component';
import { IngredientesComponent } from './Views/ingredientes/ingredientes.component';
import { RecetasComponent } from './Views/recetas/recetas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'recetas', component: RecetasComponent },
  { path: 'conversor', component: ConversorComponent},
  { path: 'ingredientes', component: IngredientesComponent},
  { path: 'logIn', component: LogInComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
