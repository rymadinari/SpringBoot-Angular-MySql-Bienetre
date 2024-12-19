import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service'; 
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MoodFormulaireComponent } from './mood-formulaire/mood-formulaire.component';  
import { ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { MoodJournalComponent } from './mood-journal/mood-journal.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { WellnessDashboardComponent } from './wellness-dashboard/wellness-dashboard.component';
import { RelaxingSoundsComponent } from './relaxing-sounds/relaxing-sounds.component';
import { RappelComponent } from './rappel/rappel.component'



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MoodFormulaireComponent,
    AccueilComponent,
    MoodJournalComponent,
    TemoignageComponent,
    WellnessDashboardComponent,
    RelaxingSoundsComponent,
    RappelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
