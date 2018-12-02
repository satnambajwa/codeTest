import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list:any[]        = [];
  order:any[]       = ["newsycombinator", "makeschool","ycombinator"];
  tweetCount:number;
  pageColor:string;
  timeRange:string;
  constructor(private httpClient: HttpClient,private router:Router){   
    
  }

  ngOnInit() {
    this.order=localStorage.getItem('order').split(',');
    this.tweetCount=Number(localStorage.getItem('count'));
    this.pageColor=localStorage.getItem('pageColor');

    this.listData();
  }

  listData(){
    this.httpClient.get('http://localhost:7890/1.1/statuses/user_timeline.json?count='+this.tweetCount+'&screen_name=makeschool')
    .subscribe(
      (data)=>{
        if(data){        
          var item = this.order.indexOf('makeschool');
          this.list[item]=data;
        }
      }
    );

    this.httpClient.get('http://localhost:7890/1.1/statuses/user_timeline.json?count='+this.tweetCount+'&screen_name=newsycombinator')
    .subscribe(
      (data)=>{
        if(data){
          var item = this.order.indexOf('newsycombinator');
          this.list[item]=data;
        
        }
      }
    );

    this.httpClient.get('http://localhost:7890/1.1/statuses/user_timeline.json?count='+this.tweetCount+'&screen_name=ycombinator')
    .subscribe(
      (data)=>{
        if(data){
          var item = this.order.indexOf('ycombinator');
          this.list[item]=data;
        
        }
      }
    );
  }

  layoutSetting(){
    this.router.navigateByUrl('/user'); 
  }

}
