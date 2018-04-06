import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ PostService ]
})
export class NavbarComponent implements OnInit {
  tagsArray: string[] = [];
  isBrowsingTags: boolean = false;
  posts;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      this.posts = dataLastEmittedFromObserver;
    });
  }

  showTag(tag: string) {
    this.router.navigate(['tag', tag]);
  }


  getTags() {
    if (!this.isBrowsingTags) {
      this.isBrowsingTags = true;
      for (let i = 0; i < this.posts.length; i++) {
        for (let j = 0; j < this.posts[i].tags.length; j++) {
          const tag = this.posts[i].tags[j];
          if (!this.tagsArray.includes(tag)) {
            this.tagsArray.push(tag);
            console.log(tag);
          }
        }
      }
    } else {
      this.isBrowsingTags = false;
    }
  }
}
