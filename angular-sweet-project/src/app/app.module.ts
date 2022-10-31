import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Views/home/home.component';
import { RecetasComponent } from './Views/recetas/recetas.component';
import { ConversorComponent } from './Views/conversor/conversor.component';
import { IngredientesComponent } from './Views/ingredientes/ingredientes.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RecetasComponent,
    ConversorComponent,
    IngredientesComponent,
    LogInComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
