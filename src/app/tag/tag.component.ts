import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  providers: [ PostService ],
})
export class TagComponent implements OnInit {
  posts;
  tagsArray: string[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      this.posts = dataLastEmittedFromObserver;
    });

  }

  getTags() {
    for (let i = 0; i < this.posts.length; i++) {
      for (let j = 0; j < this.posts[i].tags.length; j++) {
        const tag = this.posts[i].tags[j];
        if (!this.tagsArray.includes(tag)) {
          this.tagsArray.push(tag);
          console.log(tag);
        }
      }
    }
  }

}
