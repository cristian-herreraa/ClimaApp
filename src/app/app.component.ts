import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { WeatherComponent } from './weather.component';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: 
    `
    <div style="text-align:center">
      <h1>Clima {{title}}!</h1>
      <input type="text" value="London,uk" #cityInput (keyup)='0'>
      <button (click)="onClickMe(cityInput.value)">Add</button>
        <h2>{{city}}</h2>
        <h2>{{country}}</h2>
        <h2>{{weather}}</h2>
        <h2>{{description}}</h2>
        <h2>{{temp}}</h2>
        <h2>{{lon}}</h2>
        <h2>{{lat}}</h2>
    </div>
    `
  //,styleUrls: ['./app.component.css']
})

//export class AppComponent implements OnInit{
export class AppComponent{

  title = 'app';
  public city: string;
  public country: string;
  public weather: string; 
  public description: string; 
  public temp: string;
  public lon:string;
  public lat:string;

  //public cityInput: string;
  public url: string;

  constructor(private http:HttpClient){
  }

  //ngOnInit(): void {
  onClickMe(cityInput:string){
    console.log(cityInput);
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=' 
      + cityInput 
      + '&appid=c4802016ab64067cddcc12fca57b6989';
    console.log(this.url);
    this.http.get(this.url).subscribe(
      data => {      
        this.city         = data['name'];
        this.country      = data['sys']['country'];
        this.weather      = data['weather'][0]['main'];
        this.description  = data['weather'][0]['description'];
        this.temp         = data['main']['temp'];
        this.lon          = data['coord']['lon'];
        this.lat          = data['coord']['lat'];

//        console.log(data['main']['temp']); 
      },
      err => {
        console.log('Error ocurred!');
      });
  }
};