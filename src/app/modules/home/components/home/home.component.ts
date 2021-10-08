import { Component } from '@angular/core';
import { AppConsts } from 'src/app/core/consts/app.consts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly APP_NAME = AppConsts.APP_NAME;

}
