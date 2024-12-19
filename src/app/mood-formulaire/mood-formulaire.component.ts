import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MoodEntry } from '../models/mood-entry.model';
import { MoodEntryService } from '../services/moodentry.service';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-mood-formulaire',
  templateUrl: './mood-formulaire.component.html',
  styleUrls: ['./mood-formulaire.component.css']
})
export class MoodFormulaireComponent implements OnInit {
  moodForm!: FormGroup;
  moods = ['Très Heureux', 'Heureux', 'Neutre', 'Triste', 'Très Triste'];

  constructor(
    private fb: FormBuilder, 
    private moodEntryService: MoodEntryService,
    private authService: AuthService , 
    private router: Router 

  ) {}

  ngOnInit(): void {
    this.moodForm = this.fb.group({
      date: ['', Validators.required],
      mood: ['', Validators.required],
      emotionalReactions: [0, [Validators.required, Validators.min(0)]],
      stressLevel: [0, [Validators.required, Validators.min(0), Validators.max(40)]],
      socialInteractions: [0, [Validators.required, Validators.min(0)]],
      foodBalance: ['', Validators.required],
      sleepQuality: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      exerciseDuration: [0, [Validators.required, Validators.min(0)]],
      negativeThoughts: ['', Validators.required],
      cognitiveFocus: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.moodForm.valid) {
      const moodEntry: MoodEntry = this.moodForm.value; 
      
      const user = this.authService.getCurrentUser(); 
      
      if (user) {
        // Ajout de l'utilisateur à l'entrée d'humeur
        moodEntry.user = {
          id: user.id, 
          name: user.name, 
          email: user.email 
        };

        console.log('Submitting moodEntry:', moodEntry); 

        this.moodEntryService.saveMoodEntry(moodEntry).subscribe(
          response => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Votre humeur a été enregistrée',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.router.navigate(['/mood-journal']);  
            });
            this.moodForm.reset();
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: 'Il y a eu un problème lors de l\'enregistrement de votre humeur.',
            });
            console.error('Erreur lors de l\'enregistrement:', error);
          }
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Utilisateur non connecté',
          text: 'Veuillez vous connecter avant de soumettre vos données.',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Formulaire incomplet',
        text: 'Veuillez remplir tous les champs correctement.',
      });
      console.log('Formulaire invalide');
    }
  }
}
