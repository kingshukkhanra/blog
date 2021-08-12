import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() public blog;
@Output()public onViewDetails = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSend(blog){

    this.onViewDetails.emit(blog);
    // console.log(m);
    // this.blogService.setValue(m)
    // this.router.navigate(['blog-details'])
  }

}
