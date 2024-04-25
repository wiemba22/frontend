// subject.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../../model/model/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseUrl = 'http://localhost:9000/enicar'; // Base URL de votre API backend

  constructor(private http: HttpClient) {}

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.baseUrl}/enicar/getsubject`); // Assurez-vous que l'URL est correcte
  }


  getAllCourses() {
    return this.http.get<any[]>(this.baseUrl);
  }
}
