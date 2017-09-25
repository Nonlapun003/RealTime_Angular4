import { Component, OnInit } from '@angular/core';
import {SocketService} from './../socket.service';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css']
})
export class InputMessageComponent implements OnInit {
  public message: string = 'ggg'
  public data: any
 // public box: Array<string> = []
  constructor( 
    private socketService: SocketService
  ){}
  
  ngOnInit() {
    this.socketService.connect().subscribe((data)=>{
     // this.data = JSON.stringify(data)
    //  this.data = JSON.parse(data).trades[0].amount
    this.data = data
    });
  }
  send(){
    this.socketService.sendMessage(this.message)
   // this.box.push(this.message)
  }

}
