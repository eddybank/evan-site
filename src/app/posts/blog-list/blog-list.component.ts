import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogPostsService } from '../posts.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: any;

  constructor(private BlogPostsService: BlogPostsService, public route: ActivatedRoute) {}

  ngOnInit(){
    this.posts = this.BlogPostsService.getPosts();
  }
}
