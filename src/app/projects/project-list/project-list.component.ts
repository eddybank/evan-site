import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectPostService } from '../projects.service';

@Component({
  selector: 'app-about',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: any;

  constructor(private ProjectPostService: ProjectPostService, public route: ActivatedRoute) {}

  ngOnInit(){
    this.projects = this.ProjectPostService.getPosts();
  }
}
