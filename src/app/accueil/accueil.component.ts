import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoodEntryService } from '../services/moodentry.service';
import { MoodEntry } from '../models/mood-entry.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  moodEntries: MoodEntry[] = [];
  userName: string = '';
  userId:number=0;

  constructor(
    private router: Router,
    private moodEntryService: MoodEntryService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log('currentUser dans localStorage:', localStorage.getItem('currentUser')); 
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.userName = currentUser.name;
      this.userId = currentUser.id; 
      console.log('Nom d\'utilisateur récupéré:', this.userName);
      this.loadMoodEntries();
    } else {
      console.error('Utilisateur non connecté.');
      
    }
  }

  loadMoodEntries(): void {
    this.moodEntryService.getMoodEntriesByUserId(this.userId).subscribe({
      next: (entries) => {
        console.log('Entrées d\'humeur récupérées:', entries);
        this.moodEntries = entries; 
      },
      error: (error) => {
        console.error('Erreur lors du chargement des humeurs:', error);
      }
    });
  }

  onLogout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}
