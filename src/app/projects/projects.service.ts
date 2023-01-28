import { Injectable } from "@angular/core";
import * as data from "../../assets/projects.json";

@Injectable({ providedIn: "root"})
export class ProjectPostService {
    projects: any = (data as any).default;
    project: any;

    getPosts(){
        return this.projects.projects;
    }

    getPost(id: string) {
        this.projects.projects.forEach(post => {
            if(post.id === id){
                //console.log(post);
                this.project = post;
            }
        });
        return this.project;
    }
}