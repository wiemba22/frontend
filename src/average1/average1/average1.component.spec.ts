import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Average1Component } from './average1.component';

describe('Average1Component', () => {
  let component: Average1Component;
  let fixture: ComponentFixture<Average1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Average1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Average1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
