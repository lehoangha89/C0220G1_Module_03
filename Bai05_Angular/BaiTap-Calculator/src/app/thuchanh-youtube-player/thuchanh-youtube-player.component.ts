import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ThuchanhYoutubeService} from '../thuchanh-youtube.service';

@Component({
  selector: 'app-thuchanh-youtube-player',
  templateUrl: './thuchanh-youtube-player.component.html',
  styleUrls: ['./thuchanh-youtube-player.component.css']
})
export class ThuchanhYoutubePlayerComponent implements OnInit {
  song: any;
  sub: Subscription;
  constructor(private youtubeService: ThuchanhYoutubeService,
              private activatedRouter: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.youtubeService.find(id);
    });
  }
  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}
