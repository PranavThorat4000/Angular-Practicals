import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  students = [
    { name: 'Pranav', rollNo: 1, course: 'FSD' },
    { name: 'Rahul', rollNo: 2, course: 'FSD' },
    { name: 'Amit', rollNo: 3, course: 'FSD' }
  ];
}
