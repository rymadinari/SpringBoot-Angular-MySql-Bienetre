import { Component, OnInit } from '@angular/core';
import { MoodEntryService } from '../services/moodentry.service';
import { MoodEntry } from '../models/mood-entry.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-mood-journal',
  templateUrl: './mood-journal.component.html',
  styleUrls: ['./mood-journal.component.css']
})
export class MoodJournalComponent implements OnInit {
  moodEntries: MoodEntry[] = [];
  showAnalysis: boolean = false;
  analysis: string = '';
  advice: string[] = [];

  constructor(private moodEntryService: MoodEntryService,private authService: AuthService) {}

  ngOnInit(): void {
    
    this.loadMoodEntries();
    
  }

  loadMoodEntries(): void {
    const currentUser = this.authService.getCurrentUser(); 
    if (currentUser?.id) {
      this.moodEntryService.getMoodEntriesByUserId(currentUser.id).subscribe({
        next: (entries) => {
          this.moodEntries = entries;
          console.log('Entrées d\'humeur récupérées :', this.moodEntries);
        },
        error: (error) => {
          console.error('Erreur lors du chargement des entrées d\'humeur :', error);
        }
      });
    } else {
      console.error('Utilisateur non connecté ou ID introuvable.');
    }
  }
  
    
  
  
  
  deleteMoodEntry(id: number): void {
    this.moodEntryService.deleteMoodEntry(id).subscribe(
      () => {
        this.moodEntries = this.moodEntries.filter(entry => entry.id !== id);
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'humeur :', error);
      }
    );
  }

  analyzeMood(entry: MoodEntry): void {
    const {
      user,
      mood,
      stressLevel,
      sleepQuality,
      exerciseDuration,
      negativeThoughts,
      emotionalReactions,
      socialInteractions,
      foodBalance,
      cognitiveFocus
    } = entry;

    this.analysis = `Analyse de l'humeur a la date ${entry.date} :`;

    this.advice = []; 

    if (mood.toLowerCase() === 'sad' || mood.toLowerCase() === 'anxious') {
      this.advice.push('Essayez des exercices de respiration ou de méditation pour améliorer votre humeur.');
    } else if (mood.toLowerCase() === 'happy') {
      this.advice.push('Continuez ce qui fonctionne bien pour vous et partagez votre bonheur avec les autres !');
    }

    if (stressLevel >= 7) {
      this.advice.push('Prenez des pauses régulières et envisagez de pratiquer une activité relaxante comme le yoga.');
    } else if (stressLevel <= 3) {
      this.advice.push('Votre gestion du stress semble bonne. Continuez ainsi !');
    }

    if (sleepQuality <= 4) {
      this.advice.push('Essayez d’établir une routine de sommeil régulière et d’éviter les écrans avant de dormir.');
    }

    if (exerciseDuration < 30) {
      this.advice.push('Augmentez votre activité physique pour au moins 30 minutes par jour.');
    }

    if (negativeThoughts && negativeThoughts.length > 0) {
      this.advice.push('Notez vos pensées négatives et essayez de les remettre en question de manière constructive.');
    }

    if (emotionalReactions >= 7) {
      this.advice.push('Vous avez eu des réactions intenses, essayez des techniques de relaxation ou parlez-en à un proche.');
    }

    if (socialInteractions <= 3) {
      this.advice.push('Augmentez vos interactions sociales en participant à des activités de groupe ou en contactant des amis.');
    }

    if (foodBalance.toLowerCase() === 'déséquilibré') {
      this.advice.push('Essayez d’améliorer votre alimentation en incluant plus de fruits et légumes.');
    }

    if (cognitiveFocus.toLowerCase() === 'dispersé') {
      this.advice.push('Travaillez sur votre concentration en éliminant les distractions et en priorisant vos tâches.');
    }

    this.showAnalysis = true; 
  }

  closeAnalysis(): void {
    this.showAnalysis = false; // Cacher la section d'analyse
  }
}