import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemoignageService {
  private apiUrl = 'http://localhost:8080/api/temoignage'; 
  constructor(private http: HttpClient) {}

  getAllTemoignages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  saveTemoignage(temoignage: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, temoignage);
  }
}
