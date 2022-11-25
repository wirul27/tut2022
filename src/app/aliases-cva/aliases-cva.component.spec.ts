import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasesCVAComponent } from './aliases-cva.component';

describe('AliasesCVAComponent', () => {
  let component: AliasesCVAComponent;
  let fixture: ComponentFixture<AliasesCVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliasesCVAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliasesCVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
