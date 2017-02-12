import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../entities/post';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'add-post',
    templateUrl: 'addpost.component.html',
    styleUrls: ['addpost.component.css']
})
export class AddPostComponent implements OnInit {
    constructor(
        private post:PostService,
        private notify:NotificationsService
    ) { }
body:Post = new Post();

    ngOnInit() { 
        this.body.id = 0;
        this.body.body = '';
        this.body.userId= 0;
        this.body.lastupdatedOn ='';
        this.body.title ='';


    }
    addPost(){
        this.post.AddPost(this.body).subscribe((x:boolean) => {
        if(x){
            this.notify.success("Added Successfully","")
        }
        else{
            this.notify.error("Failed to add","retry");
        }

    } );
}

}