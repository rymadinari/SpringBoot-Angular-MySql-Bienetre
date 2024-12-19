import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TemoignageService } from '../services/temoignage.service';
import { Temoignage } from '../models/temoignage.model';
import { AuthService } from '../services/auth.service';  // Assurez-vous d'importer votre service d'authentification
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.css']
})
export class TemoignageComponent implements OnInit {
  temoignages: Temoignage[] = [];
  newTemoignage: Temoignage = { text: '', date: '', genre: 'male', username: 'anonymous' }; 
  temoignageForm!: FormGroup;

  constructor(
    private temoignageService: TemoignageService,
    private fb: FormBuilder,
    private authService: AuthService  
  ) {}

  ngOnInit(): void {
    this.temoignageForm = this.fb.group({
      text: ['', [Validators.required]],
      username: [[Validators.required]],  
      genre: ['male', [Validators.required]]
    });

    this.loadTemoignages();
  }

  loadTemoignages(): void {
    this.temoignageService.getAllTemoignages().subscribe(
      (data: Temoignage[]) => {
        this.temoignages = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des témoignages', error);
      }
    );
  }

  onSubmit(): void {
    if (this.temoignageForm.invalid) {
      Swal.fire('Erreur', 'Le formulaire est invalide', 'error');
      return;
    }

    // Récupère le nom de l'utilisateur connecté
    const userName = this.authService.getUserName(); // Méthode à implémenter dans le service AuthService

    const newTestimonial: Temoignage = this.temoignageForm.value;
    newTestimonial.date = new Date().toISOString().split('T')[0];
    newTestimonial.username = userName || 'anonyme';  // Remplacer 'anonyme' si l'utilisateur n'est pas connecté

    newTestimonial.avatar = this.getAvatar(newTestimonial.genre);

    this.temoignageService.saveTemoignage(newTestimonial).subscribe(
      (response) => {
        this.temoignages.push(response);
        this.temoignageForm.reset();
        Swal.fire('Succès', 'Témoignage ajouté avec succès', 'success');
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement du témoignage', error);
        Swal.fire('Erreur', 'Une erreur est survenue. Veuillez réessayer.', 'error');
      }
    );
  }

  getAvatar(genre: 'male' | 'female'): string {
    const avatars = {
      male: 'https://cdn-icons-png.flaticon.com/512/3884/3884891.png',
      female: 'https://cdn-icons-png.flaticon.com/512/3233/3233486.png',
    };
    return avatars[genre];
  }
}
