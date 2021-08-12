import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newBlog';
  constructor(private router:Router){}
  public searchString:string="";

  Send(s:any){
      this.searchString = s.value;
      console.log("App component search String",s.value);
      this.router.navigate(['blog-list',this.searchString]);
  }
}

