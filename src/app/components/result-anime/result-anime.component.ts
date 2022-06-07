import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit {
misAnimes:any[]=[];
  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
    this.animeService.getResultAnime().subscribe(result=>{
     this.misAnimes=result
    })
   
  
  }

}
