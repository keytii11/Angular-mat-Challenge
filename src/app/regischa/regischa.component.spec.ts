import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegischaComponent } from './regischa.component';

describe('RegischaComponent', () => {
  let component: RegischaComponent;
  let fixture: ComponentFixture<RegischaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegischaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegischaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
