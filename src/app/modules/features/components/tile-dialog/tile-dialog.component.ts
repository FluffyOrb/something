import { Component } from '@angular/core';
import { AppConsts } from 'src/app/core/consts/app.consts';

@Component({
  selector: 'app-tile-dialog',
  templateUrl: './tile-dialog.component.html',
  styleUrls: ['./tile-dialog.component.scss']
})
export class TileDialogComponent {

  readonly APP_NAME = AppConsts.APP_NAME;

  smallDialogOpen = false;
  largeDialogOpen = false;

}
