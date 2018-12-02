import { Component, Input, OnInit } from '@angular/core';
//import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  order:string[]    = ["newsycombinator", "makeschool","ycombinator"];
  count:number;
  pageColor:string;
  timeRange:string;
  
  constructor() {
    
  }

  ngOnInit() {
    if(!localStorage.getItem('order')||localStorage.getItem('order')==null||localStorage.getItem('order')==''){
      localStorage.setItem('order', 'makeschool,ycombinator,newsycombinator');
    }
    else{
      var order = localStorage.getItem('order').split(',');;
      this.order = order;
    }
    if(!localStorage.getItem('count')||localStorage.getItem('count')==null||localStorage.getItem('count')=='')
      localStorage.setItem('count', '30');
    else{
      var count = Number(localStorage.getItem('count'));
      this.count = count;
    }
    if(!localStorage.getItem('pageColor')||localStorage.getItem('pageColor')==null||localStorage.getItem('pageColor')=='')
      localStorage.setItem('pageColor', '#ff4');
    else{
      var color = localStorage.getItem('pageColor');
      this.pageColor = color;
    }
    if(!localStorage.getItem('timeRange')||localStorage.getItem('timeRange')==null||localStorage.getItem('timeRange')=='')
      localStorage.setItem('timeRange', '2 days');
    else{
      var range = localStorage.getItem('timeRange');
      this.timeRange = range;
    }
  }

  saveChanges(){
    localStorage.setItem('order', this.order.toString());
    localStorage.setItem('count', this.count.toString());
    localStorage.setItem('pageColor', this.pageColor);
    localStorage.setItem('timeRange', this.timeRange);
  }

  colorPicker(color){
    this.pageColor  = color;
    localStorage.setItem('pageColor', color);
  }
}
