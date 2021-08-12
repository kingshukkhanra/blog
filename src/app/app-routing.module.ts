import { ProvidesupportComponent } from './containers/providesupport/providesupport.component';
import { BlogDetailsComponent } from './containers/blog-details/blog-details.component';
import { BlogListComponent } from './containers/blog-list/blog-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:BlogListComponent,pathMatch:'full'},
  {path:'blog-list',component:BlogListComponent},
  {path:'blog-list/:key',component:BlogListComponent},
  {path:'blog-details',component:BlogDetailsComponent},
  {path:'page-support',component:ProvidesupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
