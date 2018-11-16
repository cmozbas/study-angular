import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  artists: Artist[];
  toplist: Toplist[];
  loading = false;

  constructor(private http: Http) { }

  ngOnInit() {
    // this.http.get('http://localhost:1337/api/songList')
    // .map(artist => artist.json())
    // .subscribe(data => {
    //   console.log(data);
    //   this.artists = <Artist[]>data;
    // });

    this.loading = true;

    this.http.get('http://localhost:1337/api/toplist')
    .map(artist => artist.json())
    .subscribe(data => {
      console.log(data);
      this.toplist = <Toplist[]>data;
      this.loading = false;
    });
  }

}

export interface Artist{
  Id: number;
  Name: string;
}

export interface Toplist{
  SongTitleId: number;
  Name: string;
  Title: string;
  numberOfPlay: number;
}
