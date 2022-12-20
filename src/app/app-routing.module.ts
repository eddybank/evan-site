import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogPostComponent } from './posts/blog-posts/blog-post.component';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { BlogListComponent } from './posts/blog-list/blog-list.component';
import { ProjectComponent } from './projects/project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogListComponent},
  { path: 'blog/:id', component: BlogPostComponent},
  { path: 'projects', component: ProjectListComponent},
  { path: 'projects/:id', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
