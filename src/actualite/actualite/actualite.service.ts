import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../../models/news';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  private baseUrl = 'http://localhost:8080/api/v1/news';

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}/all`);
  }

  getNewsByAuthor(author: string): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}/author/${author}`);
  }

  getNewsByDate(date: string): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}/date/${date}`);
  }

  createNews(news: News): Observable<News> {
    return this.http.post<News>(`${this.baseUrl}/create`, news);
  }

  updateNews(id: number, updatedNews: News): Observable<News> {
    return this.http.put<News>(`${this.baseUrl}/update/${id}`, updatedNews);
  }

  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
