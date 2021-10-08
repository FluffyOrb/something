import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileNotificationsComponent } from './tile-notifications.component';

describe('TileNotificationsComponent', () => {
  let component: TileNotificationsComponent;
  let fixture: ComponentFixture<TileNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
