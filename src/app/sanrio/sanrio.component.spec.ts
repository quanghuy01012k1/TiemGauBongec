import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanrioComponent } from './sanrio.component';

describe('SanrioComponent', () => {
  let component: SanrioComponent;
  let fixture: ComponentFixture<SanrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanrioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
