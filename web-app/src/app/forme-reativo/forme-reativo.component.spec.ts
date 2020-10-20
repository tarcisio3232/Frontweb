import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeReativoComponent } from './forme-reativo.component';

describe('FormeReativoComponent', () => {
  let component: FormeReativoComponent;
  let fixture: ComponentFixture<FormeReativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormeReativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
