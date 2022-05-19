import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private newsapi:NewsapiService) { }
  healtharray:any=[]
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
    this.newsapi.gethealthnews().subscribe((news)=>{this.healtharray=news.articles;})
  }

}
