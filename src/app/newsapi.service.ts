import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }


  apiurl:string= 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9adb059a297c4dd9aaff738e570cc7d1';

  sportsurl:string='https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=9adb059a297c4dd9aaff738e570cc7d1'
  scienceurl:string='https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=9adb059a297c4dd9aaff738e570cc7d1'
  entertainmenturl:string='https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=9adb059a297c4dd9aaff738e570cc7d1'
  healthurl:string='https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=9adb059a297c4dd9aaff738e570cc7d1'

  getnews():Observable<any>{
    return this._http.get(this.apiurl)
  }
  getsportsnews():Observable<any>{
    return this._http.get(this.sportsurl)
  }
  getsciencenews():Observable<any>{
    return this._http.get(this.scienceurl)
  }
  getentertainnews():Observable<any>{
    return this._http.get(this.entertainmenturl)
  }
  gethealthnews():Observable<any>{
    return this._http.get(this.healthurl)
  }
}
