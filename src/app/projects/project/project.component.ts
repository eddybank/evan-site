import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectPostService } from '../projects.service';

@Component({
  selector: 'app-about',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private projectId;
  project: any;

  constructor(private ProjectPostService: ProjectPostService, public route: ActivatedRoute) {}

  ngOnInit(){
    //this.posts = this.BlogPostsService.getPosts();
    //console.log(this.BlogPostsService.posts);

    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.projectId = paramMap.get('id');
        //console.log(this.postId);
        const postInfo = this.ProjectPostService.getPost(this.projectId);
        //console.log(postInfo);
        this.project = postInfo;
      });
  }
}
