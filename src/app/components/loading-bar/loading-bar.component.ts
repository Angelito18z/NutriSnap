import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  standalone: false,
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.scss'
})
export class LoadingBarComponent {
  @Input() calories: number = 0; // Input for calories
  @Input() protein: number = 0;  // Input for protein
  @Input() carbs: number = 0;    // Input for carbs
  @Input() fat: number = 0;      // Input for fat

  // Calculate percentages based on maximum values
  get caloriesPercentage(): number {
    return (this.calories / 2000) * 100; // Assuming 2000 kcal is the max
  }

  get proteinPercentage(): number {
    return (this.protein / 50) * 100; // Assuming 50g is the max
  }

  get carbsPercentage(): number {
    return (this.carbs / 300) * 100; // Assuming 300g is the max
  }

  get fatPercentage(): number {
    return (this.fat / 70) * 100; // Assuming 70g is the max
  }
}
