import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscriptionComponent } from './souscription.component';

describe('SouscriptionComponent', () => {
  let component: SouscriptionComponent;
  let fixture: ComponentFixture<SouscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
