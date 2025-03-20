import { Pipe, PipeTransform } from '@angular/core';
import { NutriData, Trabajador } from '../interfaces/nutri-data';

@Pipe({
  name: 'NutriImage',
  standalone: false
})
export class NutriImagePipe implements PipeTransform {

  transform(trabajador: Trabajador): string {

    if(!trabajador.id && !trabajador.alt_img){
      return 'images/no-image.png';
    }

    if(trabajador.alt_img) return trabajador.alt_img;
    return `images/heroes/${trabajador.id}.jpg`;
  }

  

}
