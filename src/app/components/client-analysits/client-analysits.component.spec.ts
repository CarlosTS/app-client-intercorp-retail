import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAnalysitsComponent } from './client-analysits.component';

describe('ClientAnalysitsComponent', () => {
  let component: ClientAnalysitsComponent;
  let fixture: ComponentFixture<ClientAnalysitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAnalysitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAnalysitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
