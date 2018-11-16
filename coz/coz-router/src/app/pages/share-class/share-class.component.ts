import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataDictionaryService } from './service/data-dictionary.service';

@Component({
  selector: 'app-share-class',
  templateUrl: './share-class.component.html',
  styleUrls: ['./share-class.component.css']
})
export class ShareClassComponent implements OnInit, OnDestroy {

  name: string;
  address: string;

  constructor(private dataDictionaryService: DataDictionaryService){
    this.name = dataDictionaryService.name;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dataDictionaryService.name = this.name;
  }
}
