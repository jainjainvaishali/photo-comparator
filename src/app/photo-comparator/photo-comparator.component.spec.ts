import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComparatorComponent } from './photo-comparator.component';

describe('PhotoComparatorComponent', () => {
  let component: PhotoComparatorComponent;
  let fixture: ComponentFixture<PhotoComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoComparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
