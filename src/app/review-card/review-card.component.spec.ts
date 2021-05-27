import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCardComponent } from './review-card.component';

describe('ReviewCardComponent', () => {
  let component: ReviewCardComponent;
  let fixture: ComponentFixture<ReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should correctly render the passed @Input value for author', () => {
    component.author = 'Kaley Schiller'; 
    fixture.detectChanges(); 
    const compiled = fixture.debugElement.nativeElement; 
    expect(compiled.querySelector('p').textContent).toBe('Kaley Schiller');
  });
  it('should correctly render the passed @Input value for date', () => {
    component.date = '2016-09-05'; 
    fixture.detectChanges(); 
    const compiled = fixture.debugElement.nativeElement; 
    expect(compiled.querySelector('#date').textContent).toBe('Date 2016-09-05');
  });
  it('should correctly render the passed @Input value for body', () => {
    component.stars = 1; 
    fixture.detectChanges(); 
    const compiled = fixture.debugElement.nativeElement; 
    expect(compiled.querySelector('#stars').textContent).toBe('1');
  });
});
