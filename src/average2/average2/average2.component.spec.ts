import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Average2Component } from './average2.component';

describe('Average2Component', () => {
  let component: Average2Component;
  let fixture: ComponentFixture<Average2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Average2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Average2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
