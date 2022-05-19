import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private newsapi:NewsapiService) { }
  sciencearray:any=[]
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
    this.newsapi.getsciencenews().subscribe((news)=>{this.sciencearray=news.articles;})
  }

}
