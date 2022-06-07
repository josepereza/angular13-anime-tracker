import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private anime_response$= new Subject<any>();

url:string='https://api.jikan.moe/v4/anime?q=';

  constructor(private http:HttpClient) { }

getAnime(searchTerm:string):Observable<any>{
  return this.http.get(`${this.url}${searchTerm}`)
}
addResultAnime(anime:any){
  this.anime_response$.next(anime)
}
getResultAnime():Observable<any>{
  return this.anime_response$.asObservable()
}
}
