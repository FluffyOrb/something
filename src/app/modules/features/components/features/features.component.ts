import { Component } from '@angular/core';
import { AppConsts } from '../../../../core/consts/app.consts';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  readonly APP_NAME = AppConsts.APP_NAME;

}
