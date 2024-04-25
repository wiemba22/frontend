// resource.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private baseUrl = 'http://localhost:9000/enicar/getressources'; // Base URL de votre API backend

  constructor(private http: HttpClient) {}

  getResources(subjectId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/matieres/${subjectId}/resources`);
  }
  addComment(resourceId: number, comment: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/commentaires/createComment`, { resourceId, comment });
  }

  getCommentsForResource(resourceId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/commentaires/${resourceId}`);
  }
}
