import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInputComponent } from './full-input.component';

describe('FullInputComponent', () => {
  let component: FullInputComponent;
  let fixture: ComponentFixture<FullInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
