import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseGraphicdesignComponent } from './showcase-graphicdesign.component';

describe('ShowcaseGraphicdesignComponent', () => {
  let component: ShowcaseGraphicdesignComponent;
  let fixture: ComponentFixture<ShowcaseGraphicdesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseGraphicdesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseGraphicdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
