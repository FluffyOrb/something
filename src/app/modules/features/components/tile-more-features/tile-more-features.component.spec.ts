import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileMoreFeaturesComponent } from './tile-more-features.component';

describe('TileMoreFeaturesComponent', () => {
  let component: TileMoreFeaturesComponent;
  let fixture: ComponentFixture<TileMoreFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileMoreFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileMoreFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
