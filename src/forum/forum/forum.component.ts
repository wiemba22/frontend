// forum.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forumPosts: any[] = [
    { title: 'Post 1', content: 'Content for post 1', author: 'User1', date: '24/04/2024' },
    { title: 'Post 2', content: 'Content for post 2', author: 'User2', date: '25/04/2024' }
    // Add more mock data as needed
  ];
}
