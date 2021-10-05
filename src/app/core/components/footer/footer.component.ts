import { Component } from '@angular/core';
import { AppConsts } from '../../consts/app.consts';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  readonly APP_NAME = AppConsts.APP_NAME;
  readonly APP_CREATOR = AppConsts.APP_CREATOR;
  readonly APP_CREATOR_GITHUB_URL = AppConsts.APP_CREATOR_GITHUB_URL;

}
