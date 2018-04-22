import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDialogueComponent } from './print-dialogue.component';

describe('PrintDialogueComponent', () => {
  let component: PrintDialogueComponent;
  let fixture: ComponentFixture<PrintDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
