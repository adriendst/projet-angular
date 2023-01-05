import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaFicheComponent } from './manga-fiche.component';

describe('MangaFicheComponent', () => {
  let component: MangaFicheComponent;
  let fixture: ComponentFixture<MangaFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
