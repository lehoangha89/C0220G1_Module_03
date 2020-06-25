import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhYoutubePlayerComponent } from './thuchanh-youtube-player.component';

describe('ThuchanhYoutubePlayerComponent', () => {
  let component: ThuchanhYoutubePlayerComponent;
  let fixture: ComponentFixture<ThuchanhYoutubePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhYoutubePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
