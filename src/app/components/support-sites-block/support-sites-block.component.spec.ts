import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportSitesBlockComponent } from './support-sites-block.component';

describe('SupportSitesBlockComponent', () => {
  let component: SupportSitesBlockComponent;
  let fixture: ComponentFixture<SupportSitesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportSitesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportSitesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
