import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './posts/blog/blog.component';
import { BlogListComponent } from './posts/blog-list/blog-list.component';
import { ProjectComponent } from './projects/project/project.component';
import { FrameModalComponent } from './modal/framemodal.component.';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogPostComponent,
    BlogListComponent,
    AboutComponent,
    ProjectListComponent,
    ProjectComponent,
    FrameModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
