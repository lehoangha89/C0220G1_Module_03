import { Component, OnInit } from '@angular/core';
import {BaitapDictionaryService, IWord} from '../baitap-dictionary.service';

@Component({
  selector: 'app-baitap-dictionary-page',
  templateUrl: './baitap-dictionary-page.component.html',
  styleUrls: ['./baitap-dictionary-page.component.css']
})
export class BaitapDictionaryPageComponent implements OnInit {
  listWord: IWord[] = [];
  constructor(
    private dictionaryService: BaitapDictionaryService,
    // public authService: AuthService
  ) { }

  ngOnInit() {
    this.listWord = this.dictionaryService.getAll();
  }
}
