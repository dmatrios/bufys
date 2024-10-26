import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de importar AppRoutingModule
import { bootstrapApplication } from '@angular/platform-browser'; // Importa bootstrapApplication

import { AppComponent } from './app.component'; // Importa AppComponent

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule // Importa el módulo de rutas
  ],
})
export class AppModule { }

// Reemplaza bootstrap en NgModule por bootstrapApplication en la raíz de tu aplicación
bootstrapApplication(AppComponent);
