import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheContentComponent } from './the-content.component';

describe('TheContentComponent', () => {
  let component: TheContentComponent;
  let fixture: ComponentFixture<TheContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheContentComponent]
    });
    fixture = TestBed.createComponent(TheContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
