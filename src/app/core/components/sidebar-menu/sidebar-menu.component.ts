import { Component } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {

  constructor(
    public menuService: MenuService,
  ) { }

  onSidebarClose() {
    this.menuService.sidebarOpen = false;
  }

}
