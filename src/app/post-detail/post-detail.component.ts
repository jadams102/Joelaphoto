import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  postId: string;
  postToDisplay:

  constructor (private route: ActivatedRoute, private location: Location, private postService: postService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.postId = urlParameters['id'];
   });
   this.postToDisplay = this.postService.getPostById(this.postId);
  }

}
