import { Component, OnInit } from '@angular/core';
import { AppConsts } from '../../../../core/consts/app.consts';

@Component({
  selector: 'app-tile-layout-responsiveness',
  templateUrl: './tile-layout-responsiveness.component.html',
  styleUrls: ['./tile-layout-responsiveness.component.scss']
})
export class TileLayoutResponsivenessComponent {

  readonly APP_NAME = AppConsts.APP_NAME;

  readonly qrCodeValue = location.href;

}
