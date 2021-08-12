import { FetchService } from './../../services/fetch.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';
import { Blogers } from 'src/app/models/blogers';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit,OnDestroy {

  constructor(private router:Router,private actRoute:ActivatedRoute,private blogService:InteractionService,private fetchService:FetchService) { }
  public searchString:any;
  public model:any;
  ngOnInit(): void {

    this.fetchService.getValue().subscribe(data=>{
      console.log(data);
      this.model = data;
    })
    this.searchString = this.actRoute.snapshot.paramMap.get('key');
    console.warn("Blog-list Component search String",this.searchString);
  }
  ngOnDestroy():void {
    console.warn("Blog-list component is exited");
  }

  onSend(m:Blogers){
    console.log(m);
    this.blogService.setValue(m)
    this.router.navigate(['blog-details'])
 }

}
