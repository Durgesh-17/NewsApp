import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-entertain',
  templateUrl: './entertain.component.html',
  styleUrls: ['./entertain.component.css']
})
export class EntertainComponent implements OnInit {

  constructor(private newsapi:NewsapiService) { }
  entertainmentarray:any=[];
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
    this.newsapi.getentertainnews().subscribe((news)=>{this.entertainmentarray=news.articles;})
  }

}
