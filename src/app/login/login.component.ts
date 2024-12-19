import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(
        response => {
          console.log('Connexion réussie', response);
          this.router.navigate(['/acceuil']);
        },
        error => {
          console.error('Erreur lors de la connexion', error);
          alert('Erreur de connexion. Veuillez vérifier vos identifiants.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
