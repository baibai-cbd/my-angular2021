import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  isUsernameEmpty = () => {
    return this.username.length == 0;
  }

  clearUsername = () => {
    this.username = '';
  }
}
