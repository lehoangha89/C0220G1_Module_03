import { Component, OnInit, OnDestroy } from '@angular/core';
import {BaitapDictionaryService, IWord} from '../baitap-dictionary.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-baitap-dictionary-detail',
  templateUrl: './baitap-dictionary-detail.component.html',
  styleUrls: ['./baitap-dictionary-detail.component.css']
})
export class BaitapDictionaryDetailComponent implements OnInit, OnDestroy {

  word: IWord;
  sub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: BaitapDictionaryService
  ) { }

  ngOnInit() {
    /*
    const {snapshot} = this.activatedRoute;
    const key = snapshot.paramMap.get('key');
    const meaning = this.dictionaryService.search(key);
    this.word = {
      key: key,
      meaning: meaning
    };
    */
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {
        key: key,
        meaning: meaning
      };
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
