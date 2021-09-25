import { Pipe, PipeTransform } from '@angular/core';
import { Level } from 'src/app/models/api.model';

@Pipe({
  name: 'levelIcon'
})
export class LevelIconPipe implements PipeTransform {

  transform(value: Level): string {
    switch (value) {
      case 'LOW':
        return 'fas fa-info-circle';
      case 'MEDIUM':
        return 'fas fa-exclamation-triangle';
      case 'HIGH':
        return 'fas fa-exclamation-circle';
      default:
        return '';
    }
  }

}
