import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneTwoComponent } from './scene-two.component';

describe('SceneTwoComponent', () => {
  let component: SceneTwoComponent;
  let fixture: ComponentFixture<SceneTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
