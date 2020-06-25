import { Component, OnInit } from '@angular/core';
import {ThuchanhYoutubeService} from '../thuchanh-youtube.service';

@Component({
  selector: 'app-thuchanh-youtube-playlist',
  templateUrl: './thuchanh-youtube-playlist.component.html',
  styleUrls: ['./thuchanh-youtube-playlist.component.css']
})
export class ThuchanhYoutubePlaylistComponent implements OnInit {

  constructor(public youtubeService: ThuchanhYoutubeService) { }

  ngOnInit(): void {
  }

}
