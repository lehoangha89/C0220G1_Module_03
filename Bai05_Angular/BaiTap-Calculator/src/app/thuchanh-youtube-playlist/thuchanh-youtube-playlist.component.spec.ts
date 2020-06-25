import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuchanhYoutubePlaylistComponent } from './thuchanh-youtube-playlist.component';

describe('ThuchanhYoutubePlaylistComponent', () => {
  let component: ThuchanhYoutubePlaylistComponent;
  let fixture: ComponentFixture<ThuchanhYoutubePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuchanhYoutubePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuchanhYoutubePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
