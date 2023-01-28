import { Injectable } from "@angular/core";
import * as data from "../../assets/blogs.json";

@Injectable({ providedIn: "root"})
export class BlogPostsService {
    posts: any = (data as any).default;
    post: any;

    getPosts(){
        return this.posts.posts;
    }

    getPost(id: string) {
        this.posts.posts.forEach(post => {
            if(post.id === id){
                //console.log(post);
                this.post = post;
            }
        });
        return this.post;
    }
}
