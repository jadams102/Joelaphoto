import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  providers: [ PostService ],
})
export class TagComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  selectedTag: string;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.selectedTag = urlParameters['selectedTag'];
   });
   this.posts = this.postService.getPosts();
    }

    containsTag(tags) {
      if (tags.includes(this.selectedTag)) {
        return true;
      } else {
        return false;
      }
    }

    goToDetailPage(post) {
      this.router.navigate(['posts', post.$key]);
    }

}
