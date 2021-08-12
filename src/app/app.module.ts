import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './containers/blog-list/blog-list.component';
import { BlogDetailsComponent } from './containers/blog-details/blog-details.component';
import { ProvidesupportComponent } from './containers/providesupport/providesupport.component';
import { SearchPipe } from './pipes/search.pipe';
import { InteractionService } from './services/interaction.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { FetchService } from './services/fetch.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailsComponent,
    ProvidesupportComponent,
    SearchPipe,
    CardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [InteractionService,FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
