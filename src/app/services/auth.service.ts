import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; 

  constructor(private http: HttpClient) {}

  register(nom: string, email: string, password: string): Observable<any> {
    const user = { nom, email, password };
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      catchError((error) => {
        console.error('Erreur lors de l\'inscription', error);
        if (error.status === 400 && error.error.message) {
          return throwError(() => new Error(error.error.message));
        }
        return throwError(() => new Error('Erreur inconnue'));
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap((response: any) => {
        console.log('Réponse de connexion:', response); 
        if (response && response.utilisateur) {
          const currentUser = {
            id: response.utilisateur.id,
            name: response.utilisateur.nom,
            email: response.utilisateur.email, 
          };
          localStorage.setItem('currentUser', JSON.stringify(currentUser)); //convrtir objet json en chaine car il n'accepte que de chaine 
        } else {
          console.error('Données utilisateur manquantes dans la réponse.');
        }
      }),
      catchError((error) => {
        console.error('Erreur lors de la connexion', error);
        return throwError(() => new Error(error.error.message || 'Erreur inconnue'));
      })
    );
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('currentUser'); 
    return user ? JSON.parse(user) : null; //convertir chaine en objetjson
  }

  getUserName(): string {
    const currentUser = this.getCurrentUser();
    return currentUser ? currentUser.name : ''; 
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    console.log('Utilisateur déconnecté.');
  }
}
