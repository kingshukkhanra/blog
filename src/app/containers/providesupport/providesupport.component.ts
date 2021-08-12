import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providesupport',
  templateUrl: './providesupport.component.html',
  styleUrls: ['./providesupport.component.scss']
})
export class ProvidesupportComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  public currentStar:number = 3;
}
