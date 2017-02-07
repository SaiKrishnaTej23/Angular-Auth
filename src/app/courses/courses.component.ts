import { Component, OnInit } from '@angular/core';
import { PostService } from './courses.service';
import { Courses } from '../entities/courses';
@Component({
    selector: 'courses-app',
    templateUrl: 'courses.component.html'
})
export class PostComponent implements OnInit {
    constructor(private coursess:PostService) { }
    allcourses: Courses[];

    allcoursess(x:Courses[]){
        this.allcourses = x;
        console.log(x);
    }

    ngOnInit() { 
            this.coursess.Posts().subscribe(
                x => this.allcoursess(x),
                y => console.log(y),
                ()=> console.log('completed')
                );
    }
}