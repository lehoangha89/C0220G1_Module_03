import { Component, OnInit } from '@angular/core';
import {BaitapDictionaryService, IWord} from '../baitap-dictionary.service';

@Component({
  selector: 'app-baitap-dictionary',
  templateUrl: './baitap-dictionary.component.html',
  styleUrls: ['./baitap-dictionary.component.css']
})
export class BaitapDictionaryComponent implements OnInit {
  word: IWord;
  constructor(private dictionaryService: BaitapDictionaryService) { }

  ngOnInit(): void {
  }
  search(word: string) {
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaning
    };
  }
}
