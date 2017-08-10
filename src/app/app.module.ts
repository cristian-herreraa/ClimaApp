import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { InputComponent } from './input.component';


//HttpClient
import { HttpClientModule } from '@angular/common/http';

enableProdMode();

@NgModule({ 
  declarations: [ 
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }  


