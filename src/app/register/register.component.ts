import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  nom: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  onRegister(): void {
    if (this.email && this.password && this.nom) {
      this.authService.register(this.nom, this.email, this.password).subscribe(
        (response) => {
          console.log('Utilisateur inscrit avec succès', response);
          alert('Compte créé avec succès !');

          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Erreur lors de l\'inscription', error);

          alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        }
      );
    } else {
      alert('Tous les champs doivent être remplis.');
    }
  }
}
