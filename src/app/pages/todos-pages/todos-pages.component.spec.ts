import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPagesComponent } from './todos-pages.component';

describe('TodosPagesComponent', () => {
  let component: TodosPagesComponent;
  let fixture: ComponentFixture<TodosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
