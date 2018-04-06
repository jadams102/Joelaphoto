import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService]
})

export class AdminComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToAdminDetailPage(post) {
    this.router.navigate(['admin', post.$key]);
  }

}
