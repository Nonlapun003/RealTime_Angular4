import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = 'http://localhost:5000';  
  private socket;

  connect(){
    const subject = new Subject<any>()
    this.socket = io(this.url);
    this.socket.on('message', (data) => {
      //console.log(data)
      subject.next(data)
    });   
    return subject    
  }
  
  sendMessage(message){
    this.socket.emit('shop', message);    
  }
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log(data)
       // observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

 // constructor() { }

}
