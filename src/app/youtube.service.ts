import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
export class YoutubeService {

  constructor(){}
  // apiKey: string = 'AIzaSyASWLjhB0fBCV4y2ZZvWoLqNYO4swGlGRo';

  // constructor(public http: HttpClient ) { }

  // getVideosForChanel(channel: any, maxResults: any): Observable<Object> {
  //   let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet&type=video,id&maxResults=' + maxResults
  //   return this.http.get(url)
  //     .pipe(map((res) => {
  //       console.log(res);
  //       return res;
  //     }))
  // }

  // openVideo(): Observable<Object> {
  //   let url = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';
  //   return this.http.get(url)
  //     .pipe(map((res) => {
  //       console.log(res);
  //       return res;
  //     }))
  // }

}