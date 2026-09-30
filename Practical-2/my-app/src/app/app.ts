import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  studentNames = [
    'Pranav',
    'Rahul',
    'Amit',
    'Sneha',
    'Priya'
  ];
}
