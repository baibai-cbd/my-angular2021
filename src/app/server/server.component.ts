import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  username = '';
  showDetail = true;
  toggleCount = 0;
  toggleEvents = [];

  constructor() { }

  ngOnInit(): void {
  }

  isUsernameEmpty = () => {
    return this.username.length == 0;
  }

  clearUsername = () => {
    this.username = '';
  }

  displayDetail = () => {
    return this.showDetail;
  }

  toggleDetail = () => {
    this.showDetail = !this.showDetail;
    this.toggleEvents.push({ index: this.toggleCount + 1, name: 'click' });
    this.toggleCount++;
  }

  getStyle = (item) => {
    if (item.index >= 5) {
      return { backgroundColor: 'blue' };
    } else {
      return {};
    }
  }

  getClass = (item) => {
    if (item.index >= 5) {
      return { fiver: true };
    } else {
      return {};
    }
  }
}
