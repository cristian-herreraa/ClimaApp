import { Component, OnInit } from '@angular/core';
import { InputComponent } from './input.component';

@Component({
  selector: 'app-root'
  //,templateUrl: './app.component.html'  
  ,template: 
    `
    <div style="text-align:center">
      <h1>Clima {{title}}!</h1>
      <app-input></app-input>
    </div> 
    `
  //,styleUrls: ['./app.component.css']
})

//export class AppComponent implements OnInit{
export class AppComponent{
  title = 'app';
};