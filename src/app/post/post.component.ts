import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../entities/post';
@Component({
    selector: 'post-app',
    templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit {
    constructor(private posts:PostService) { }
    allpost: Post[];

    allposts(x:Post[]){
        this.allpost = x;
        console.log(x);
    }

    ngOnInit() { 
            this.posts.Posts().subscribe(
                x => this.allposts(x),
                y => console.log(y),
                ()=> console.log('completed')
                );
    }
}