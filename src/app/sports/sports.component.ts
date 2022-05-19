import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private newsapi:NewsapiService) { }
  sportsarray:any=[];
  selectedmode:string="light";
  
  changemode():void{
    if (this.selectedmode=="light"){
      this.selectedmode="dark";
    }
    else{
      this.selectedmode="light";
    }
  }
  ngOnInit(): void {
    this.newsapi.getsportsnews().subscribe((news)=>{this.sportsarray=news.articles;})
  }
}
