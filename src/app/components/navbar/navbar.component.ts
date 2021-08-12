import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'newBlog';
  constructor(private router:Router){}
  public searchString:string="";

  ngOnInit(): void {
    console.log("Navber Loaded")
  }

  Send(s:any){
    this.searchString = s.value;
    console.log("App component search String",s.value);
    this.router.navigate(['blog-list',this.searchString]);
}

}
