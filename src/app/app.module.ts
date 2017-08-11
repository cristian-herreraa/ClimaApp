import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { InputComponent } from './input.component';

//HttpClient
import { HttpClientModule } from '@angular/common/http';

//GoogleMap
import { AgmCoreModule } from '@agm/core';

enableProdMode();

@NgModule({ 
  declarations: [ 
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlNpbIjHIE32J9LNLC4ab7YhA7ps4Lggs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }  


