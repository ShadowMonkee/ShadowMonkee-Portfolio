import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSnapshotSection } from './about-snapshot-section';

describe('AboutSnapshotSection', () => {
  let component: AboutSnapshotSection;
  let fixture: ComponentFixture<AboutSnapshotSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSnapshotSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSnapshotSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
