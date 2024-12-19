import { Component, OnInit } from '@angular/core'; 
import { RappelService } from '../services/rappel.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rappel',
  templateUrl: './rappel.component.html',
  styleUrls: ['./rappel.component.css']
})
export class RappelComponent implements OnInit {
  rappels: any[] = [];
  rappelsToday: any[] = [];
  titre: string = '';
  description: string = '';
  dateRappel: string = '';
  heureRappel: string = '';
  todayDate: string = ''; 

  constructor(private rappelService: RappelService, private authService: AuthService) { }

  ngOnInit(): void {
    this.todayDate = new Date().toISOString().split('T')[0]; // Format 'YYYY-MM-DD'
    this.loadTodayRappels(); // Charge les rappels du jour au démarrage
  }

  // Méthode pour récupérer les rappels du jour
  loadTodayRappels(): void {
    const userId = this.authService.getCurrentUser()?.id;
    if (userId) {
      this.rappelService.getRappelsToday(userId).subscribe(
        (response) => {
          this.rappelsToday = response; 
        },
        (error) => {
          console.error('Erreur lors de la récupération des rappels:', error);
        }
      );
    } else {
      console.error('Utilisateur non connecté');
    }
  }

  // Ajouter un rappel et mettre à jour la liste
  ajouterRappel(): void {
    const user = this.authService.getCurrentUser(); // Récupère l'utilisateur complet
    if (user && user.id) { // Vérifie que l'utilisateur existe et a un id valide
      const newRappel = {
        titre: this.titre,
        description: this.description,
        dateRappel: this.dateRappel,
        heureRappel: this.heureRappel,
        utilisateur: { id: user.id } // Passe l'objet utilisateur avec son ID
      };
  
      this.rappelService.saveRappel(newRappel).subscribe(
        (response) => {
          this.loadTodayRappels(); // Rafraîchit la liste des rappels
          this.titre = ''; // Réinitialise le formulaire 
          this.description = '';
          this.dateRappel = '';
          this.heureRappel = '';
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du rappel:', error);
        }
      );
    } else {
      console.error('Utilisateur non connecté ou sans ID valide');
    }
  }

  // Mettre à jour un rappel (terminer un rappel)
  terminerRappel(id: number): void {
    this.rappelService.terminerRappel(id).subscribe(
      (response) => {
        this.loadTodayRappels(); // Recharge les rappels après mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du rappel:', error);
      }
    );
  }
}
