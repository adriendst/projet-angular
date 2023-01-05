import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaModifComponent } from './manga-modif.component';

describe('MangaModifComponent', () => {
  let component: MangaModifComponent;
  let fixture: ComponentFixture<MangaModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
