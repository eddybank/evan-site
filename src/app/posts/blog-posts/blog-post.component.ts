import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BlogPostsService } from '../posts.servive';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  private postId;
  //posts: any;
  post: any;
  constructor(private BlogPostsService: BlogPostsService, public route: ActivatedRoute) {}

  ngOnInit(){
    //this.posts = this.BlogPostsService.getPosts();
    //console.log(this.BlogPostsService.posts);

    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.postId = paramMap.get('id');
        //console.log(this.postId);
        const postInfo = this.BlogPostsService.getPost(this.postId);
        //console.log(postInfo);
        this.post = postInfo;
      });
  }
}
