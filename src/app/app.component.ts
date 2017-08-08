import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { WeatherComponent } from './weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  //temp:string;

  title = 'app';
  
  url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c4802016ab64067cddcc12fca57b6989';
  
  constructor(private http:HttpClient){
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      data => {      
        temperature = data['main']['temp'];
        console.log(data['main']['temp']); 
      },
      err => {
        console.log('Error ocurred!');
      });
  }
};