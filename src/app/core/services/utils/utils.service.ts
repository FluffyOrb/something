import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  getRandomNumber(max: number, min: number = 0): number {
    return Math.round(Math.random() * (max - min)) + min;
  }

  getRandomValue<T>(...array: T[]): T {
    return array[this.getRandomNumber(array.length - 1)];
  }

}
