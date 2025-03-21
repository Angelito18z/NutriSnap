import { Component, OnInit } from '@angular/core';

interface Fruit {
  id: number;
  name: string;
  image: string;
  protein: number;
  carbohydrates: number;
  sugar: number;
}

@Component({
  selector: 'app-fruit-card',
  standalone: false,
  templateUrl: './fruit-card.component.html',
  styleUrl: './fruit-card.component.scss'
})
export class FruitCardComponent implements OnInit {
  fruits: Fruit[] = [
    {
      id: 1,
      name: 'Banana',
      image: 'https://via.placeholder.com/150?text=Banana',
      protein: 1.1,
      carbohydrates: 22.8,
      sugar: 12.2
    },
    {
      id: 2,
      name: 'Apple',
      image: 'https://via.placeholder.com/150?text=Apple',
      protein: 0.3,
      carbohydrates: 13.8,
      sugar: 10.4
    },
    {
      id: 3,
      name: 'Orange',
      image: 'https://via.placeholder.com/150?text=Orange',
      protein: 0.9,
      carbohydrates: 11.8,
      sugar: 9.4
    },
    {
      id: 4,
      name: 'Strawberry',
      image: 'https://via.placeholder.com/150?text=Strawberry',
      protein: 0.7,
      carbohydrates: 7.7,
      sugar: 4.9
    },
    {
      id: 5,
      name: 'Mango',
      image: 'https://via.placeholder.com/150?text=Mango',
      protein: 0.8,
      carbohydrates: 15.0,
      sugar: 13.7
    },
    {
      id: 6,
      name: 'Pineapple',
      image: 'https://via.placeholder.com/150?text=Pineapple',
      protein: 0.5,
      carbohydrates: 13.1,
      sugar: 9.9
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
