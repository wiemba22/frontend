import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Average2 } from '../../model/model/Average2';

@Injectable({
  providedIn: 'root'
})
export class Average2Service {

  private baseUrl = 'http://localhost:8080/api/v1/average2';

  constructor(private http: HttpClient) { }

  getAllAverage2(): Observable<Average2[]> {
    return this.http.get<Average2[]>(`${this.baseUrl}/all`);
  }

  getAverage2ByUser(user: string): Observable<Average2> {
    return this.http.get<Average2>(`${this.baseUrl}/user/${user}`);
  }

  createAverage2(average2: Average2): Observable<Average2> {
    return this.http.post<Average2>(`${this.baseUrl}/create`, average2);
  }

  deleteAverage2(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  updateAverage2(id: number, updatedAverage2: Average2): Observable<Average2> {
    return this.http.put<Average2>(`${this.baseUrl}/update/${id}`, updatedAverage2);
  }

  getBestAverage2(): Observable<Average2> {
    return this.http.get<Average2>(`${this.baseUrl}/best`);
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

  calculateU_2_1(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_1/${id}`);
  }

  calculateU_2_2(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_2/${id}`);
  }

  calculateU_2_3(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_3/${id}`);
  }

  calculateU_2_4(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_4/${id}`);
  }

  calculateU_2_5(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_5/${id}`);
  }

  calculateU_2_6(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_6/${id}`);
  }

  calculateU_2_7(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_7/${id}`);
  }

  calculateU_2_8(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_8/${id}`);
  }

  calculateU_2_9(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_9/${id}`);
  }

  calculateU_2_10(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/calculateU_2_10/${id}`);
  }
}
