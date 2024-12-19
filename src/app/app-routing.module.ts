import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
import { MoodFormulaireComponent } from './mood-formulaire/mood-formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MoodJournalComponent } from './mood-journal/mood-journal.component';
import {TemoignageComponent} from './temoignage/temoignage.component';
import { WellnessDashboardComponent } from './wellness-dashboard/wellness-dashboard.component';
import { RelaxingSoundsComponent } from './relaxing-sounds/relaxing-sounds.component';
import { RappelComponent } from './rappel/rappel.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'acceuil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mood-formulaire', component: MoodFormulaireComponent },
  { path: 'mood-journal', component: MoodJournalComponent},
  {path: 'temoignage', component:TemoignageComponent},
  { path: 'wellness', component: WellnessDashboardComponent },
  { path : 'relax', component:RelaxingSoundsComponent},
  {path: 'rappel', component:RappelComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rediriger par défaut vers login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
