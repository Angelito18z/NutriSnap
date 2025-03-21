import { Component, OnInit, OnDestroy } from '@angular/core';

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
export class FruitCardComponent implements OnInit, OnDestroy {
  fruits: Fruit[] = [
    {
      id: 1,
      name: 'Plátano',
      image: 'assets/frutas/platano.jpg',
      protein: 1.1,
      carbohydrates: 22.8,
      sugar: 12.2
    },
    {
      id: 2,
      name: 'Manzana',
      image: 'assets/frutas/manzana.jpg',
      protein: 0.3,
      carbohydrates: 13.8,
      sugar: 10.4
    },
    {
      id: 3,
      name: 'Naranja',
      image: 'assets/frutas/naranja.jpeg',
      protein: 0.9,
      carbohydrates: 11.8,
      sugar: 9.4
    },
    {
      id: 4,
      name: 'Fresa',
      image: 'assets/frutas/fresa.png',
      protein: 0.7,
      carbohydrates: 7.7,
      sugar: 4.9
    },
    {
      id: 5,
      name: 'Mango',
      image: 'assets/frutas/mango.jpg',
      protein: 0.8,
      carbohydrates: 15.0,
      sugar: 13.7
    },
    {
      id: 6,
      name: 'Piña',
      image: 'assets/frutas/piña.jpg',
      protein: 0.5,
      carbohydrates: 13.1,
      sugar: 9.9
    }
  ];

  displayedFruits: Fruit[] = [];
  carouselInterval: any;
  currentStartIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // Inicialmente mostrar las primeras 4 frutas
    this.updateDisplayedFruits();

    // Configurar el intervalo para cambiar las frutas cada 40 segundos
    this.carouselInterval = setInterval(() => {
      this.rotateCarousel();
    }, 40000);
  }

  ngOnDestroy(): void {
    // Limpiar el intervalo cuando el componente se destruye para evitar fugas de memoria
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  updateDisplayedFruits(): void {
    this.displayedFruits = [];

    // Obtener 4 frutas comenzando desde currentStartIndex
    for (let i = 0; i < 4; i++) {
      const index = (this.currentStartIndex + i) % this.fruits.length;
      this.displayedFruits.push(this.fruits[index]);
    }
  }

  rotateCarousel(): void {
    // Añadir una clase para activar la animación de desvanecimiento
    document.querySelector('.cards-container')?.classList.add('fade-out');

    // Después de que se complete la animación, actualizar las frutas mostradas
    setTimeout(() => {
      // Actualizar el índice de inicio para mostrar el siguiente conjunto de frutas
      this.currentStartIndex = (this.currentStartIndex + 2) % this.fruits.length;
      this.updateDisplayedFruits();

      // Quitar la clase fade-out y añadir fade-in
      const container = document.querySelector('.cards-container');
      container?.classList.remove('fade-out');
      container?.classList.add('fade-in');

      // Quitar la clase fade-in después de que se complete la animación
      setTimeout(() => {
        container?.classList.remove('fade-in');
      }, 500);
    }, 500);
  }
}
