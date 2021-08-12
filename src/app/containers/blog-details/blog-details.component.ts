import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { ActivatedRoute } from '@angular/router';
import { Blogers } from 'src/app/models/blogers';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,private BlogService:InteractionService) { }
  modelBlogs:any;
  ngOnInit(): void {
    console.warn("Blog Details Loaded");
    this.modelBlogs = this.BlogService.getValue();
    console.warn(this.modelBlogs);
  }

}
