import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../../model/model/Course.model';
import { ressource } from '../../model/model/ressource.model';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:9000/enicar/getCourse';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
  getCourseResources(courseId: number): Observable<ressource[]> {
    return this.http.get<ressource[]>(`${this.apiUrl}/courses/${courseId}/resources`);}
 /* get(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }*/
}
