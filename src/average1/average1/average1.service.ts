import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Average1 } from '../../models/Average1';

@Injectable({
  providedIn: 'root'
})
export class Average1Service {

  private baseUrl = 'http://localhost:8080/api/v1/average1';

  constructor(private http: HttpClient) { }

  getAllAverage1(): Observable<Average1[]> {
    return this.http.get<Average1[]>(`${this.baseUrl}/all`);
  }

  getAverage1ByUser(user: string): Observable<Average1> {
    return this.http.get<Average1>(`${this.baseUrl}/user/${user}`);
  }

  createAverage1(average1: Average1): Observable<Average1> {
    return this.http.post<Average1>(`${this.baseUrl}/create`, average1);
  }

  deleteAverage1(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  updateAverage1(id: number, updatedAverage1: Average1): Observable<Average1> {
    return this.http.put<Average1>(`${this.baseUrl}/update/${id}`, updatedAverage1);
  }

  getBestAverage1(): Observable<Average1> {
    return this.http.get<Average1>(`${this.baseUrl}/best`);
  }

  calculateTotalAverageById(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/average/${id}`);
  }

  calculateSem1(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateSem1/${id}`);
  }

  calculateSem2(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateSem2/${id}`);
  }

  calculateU_1_1(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_1/${id}`);
  }

  calculateU_1_2(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_2/${id}`);
  }

  calculateU_1_3(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_3/${id}`);
  }

  calculateU_1_4(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_4/${id}`);
  }

  calculateU_1_5(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_5/${id}`);
  }

  calculateU_1_6(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_6/${id}`);
  }

  calculateU_1_7(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_7/${id}`);
  }

  calculateU_1_8(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_8/${id}`);
  }

  calculateU_1_9(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_9/${id}`);
  }

  calculateU_1_10(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_1_10/${id}`);
  }
}
