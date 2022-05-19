import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private newsapi:NewsapiService) { }

  newsarray:any=[];
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
    this.newsapi.getnews().subscribe(news=>{console.log(news.articles);
    this.newsarray = news.articles;
    })
    
  }

}
