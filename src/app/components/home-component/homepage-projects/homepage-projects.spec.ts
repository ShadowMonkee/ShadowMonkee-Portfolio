import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageProjects } from './homepage-projects';

describe('HomepageProjects', () => {
  let component: HomepageProjects;
  let fixture: ComponentFixture<HomepageProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
