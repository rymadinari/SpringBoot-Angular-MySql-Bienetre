import { Injectable } from '@angular/core';
import { RappelComponent } from '../rappel/rappel.component';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RappelService {
  private apiUrl = 'http://localhost:8080/api/rappels';

  constructor(private http: HttpClient) { }

  // Ajouter un rappel
  saveRappel(rappel: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, rappel);
  }

  // Récupérer les rappels d'aujourd'hui
  getRappelsToday(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/today/${userId}`);
  }

  

  // Marquer un rappel comme terminé
  terminerRappel(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/terminer/${id}`, {});
  }
}

