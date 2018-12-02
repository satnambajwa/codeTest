import { Component,ViewChild } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title             = 'app';
  @ViewChild(HomeComponent) pageColor;
  color:string;
  
  ngOnInit() {
    if(!localStorage.getItem('pageColor'))
      this.color  = this.pageColor;
    else
      this.color = localStorage.getItem('pageColor');
    
  }

}
