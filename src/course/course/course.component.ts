import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/model/Course.model';
import { CourseService } from '../../service/service/course.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService ,private router: Router) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe(courses=> this.courses = courses);
  }

  navigateToResources(courseId: number): void {
    // Utilisez le routeur pour naviguer vers la page de ressources avec l'ID du cours en tant que paramètre
    this.router.navigate(['/resources', courseId]);
  }
}
