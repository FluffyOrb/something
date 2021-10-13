import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLayoutResponsivenessComponent } from './tile-layout-responsiveness.component';

describe('TileLayoutResponsivenessComponent', () => {
  let component: TileLayoutResponsivenessComponent;
  let fixture: ComponentFixture<TileLayoutResponsivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileLayoutResponsivenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileLayoutResponsivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
