import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  standalone: false,
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent {
  @Input() calories: number = 0;
  @Input() protein: number = 0;
  @Input() carbs: number = 0;
  @Input() fat: number = 0;

  get total(): number {
    return this.calories + this.protein + this.carbs + this.fat;
  }

  get caloriesPercentage(): string {
    return this.total > 0 ? `${(this.calories / this.total) * 100}%` : '0%';
  }

  get proteinPercentage(): string {
    return this.total > 0 ? `${(this.protein / this.total) * 100}%` : '0%';
  }

  get carbsPercentage(): string {
    return this.total > 0 ? `${(this.carbs / this.total) * 100}%` : '0%';
  }

  get fatPercentage(): string {
    return this.total > 0 ? `${(this.fat / this.total) * 100}%` : '0%';
  }
}
