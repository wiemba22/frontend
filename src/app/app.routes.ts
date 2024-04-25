import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActualiteComponent } from '../actualite/actualite/actualite.component';
import { Average1Component } from '../average1/average1/average1.component';
import { Average2Component } from '../average2/average2/average2.component';
import { ForumComponent } from '../forum/forum/forum.component';


export const  routes: Routes = [
  { path: 'average1', component: Average1Component },
  { path: 'average2', component: Average2Component },
  { path: 'actualite', component: ActualiteComponent },
  // Ajoutez d'autres chemins ici si nécessaire
];

@NgModule({
  declarations: [], // Aucune déclaration nécessaire ici
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), // Importez RouterModule et utilisez .forRoot() avec vos routes
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule] // Exportez RouterModule pour qu'il soit disponible dans d'autres modules
})
export class AppRoutingModule { }
