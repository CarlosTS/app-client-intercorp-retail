import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPromComponent } from './client-prom.component';

describe('ClientPromComponent', () => {
  let component: ClientPromComponent;
  let fixture: ComponentFixture<ClientPromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
