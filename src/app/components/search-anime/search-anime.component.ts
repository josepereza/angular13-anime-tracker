import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit {
  @ViewChild('myInput') myInput!: ElementRef; 
  
  setFocus() { 
    this.myInput.nativeElement.focus(); 
  } 
searchTermino=new FormControl()
  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
  }
buscar(){
  console.log(this.searchTermino.value)
  
  this.animeService.getAnime(this.searchTermino.value).subscribe(result=>{
    console.log(result.data)
this.animeService.addResultAnime(result.data)
this.searchTermino.patchValue('')
  })
}
}
