import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,ReactiveFormsModule  ],
  templateUrl: '../average2/average2/average2.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  model: any = {
    email: '',
    password: ''
  };

}
