import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputMessageComponent } from './input-message/input-message.component';
import {InputMessageModule} from './input-message/input-message.module';
import {SocketService} from './socket.service';

@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    InputMessageModule
    
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
