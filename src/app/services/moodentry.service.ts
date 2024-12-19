import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoodEntry } from '../models/mood-entry.model';
import { AuthService } from './auth.service'; 

@Injectable({
  providedIn: 'root',
})
export class MoodEntryService {
  private apiUrl = 'http://localhost:8080/api/mood-entry'; 

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMoodEntriesByUserId(userId: number): Observable<MoodEntry[]> {
    return this.http.get<MoodEntry[]>(`${this.apiUrl}/${userId}`);
  }

  
  saveMoodEntry(moodEntry: MoodEntry): Observable<MoodEntry> {
    return this.http.post<MoodEntry>(`${this.apiUrl}/save`, moodEntry);
  }

  deleteMoodEntry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
