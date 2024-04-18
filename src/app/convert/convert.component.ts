import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {
  // Konvertera
  // meter och fot
  
  // Properties
  lengthResult: number = 0;
  meter: number = 0
  fot: number = 0

  metToFot(): void {
    this.lengthResult = this.meter * 3.28084;
  }

  fotToMet(): void {
    this.lengthResult = this.fot * 0.3048;
  }


  // celcius och fahrenheit

  // Properties
  tempResult: number = 0;
  celcius: number = 0;
  fahrenheit: number = 0;

  celToFar(): void {
    this.tempResult = (this.celcius * 9 / 5) + 32; 
  }

  farToCel(): void {
    this.tempResult = (this.fahrenheit - 32) * 5 / 9;
  }
}