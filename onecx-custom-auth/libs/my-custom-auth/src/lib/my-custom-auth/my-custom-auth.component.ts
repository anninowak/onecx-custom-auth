import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-custom-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-custom-auth.component.html',
  styleUrl: './my-custom-auth.component.css',
})
export class MyCustomAuthComponent {}
