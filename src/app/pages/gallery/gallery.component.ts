import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    'assets/pet-1.jpg',
    'assets/pet-2.jpeg',
    'assets/pet-3.jpg',
    'assets/pet-4.jpg',
    'assets/pet-5.jpg',
    'assets/pet-6.jpg',
    'assets/pet-7.jpg',
    'assets/pet-8.jpg'
  ];
}