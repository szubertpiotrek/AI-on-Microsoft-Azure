import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public predictions = [];

  constructor() {}

  ngOnInit() {

  }

  public response(value) {
    this.predictions = value.predictions;
  }
}
