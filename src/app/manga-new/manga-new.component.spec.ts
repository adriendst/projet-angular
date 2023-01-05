import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaNewComponent } from './manga-new.component';

describe('MangaNewComponent', () => {
  let component: MangaNewComponent;
  let fixture: ComponentFixture<MangaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
