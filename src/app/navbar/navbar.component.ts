import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ PostService, AuthenticationService, AngularFireAuth ]
})
export class NavbarComponent implements OnInit {
  tagsArray: string[] = [];
  private isBrowsingTags: boolean = false;
  private isLoggedIn: Boolean;
  posts;
  user;
  userName: string;

  constructor(private authService: AuthenticationService, private postService: PostService, private router: Router) {
    this.authService.user.subscribe(user => {
         if (user == null) {
           this.isLoggedIn = false;
         } else {
           this.isLoggedIn = true;
           this.userName = user.displayName;
         }
       });
   }

  ngOnInit() {
    this.posts = this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      this.posts = dataLastEmittedFromObserver;
    });
  }

  showTag(tag: string) {
    this.router.navigate(['tag', tag]);
    this.isBrowsingTags = false;
  }


  getTags() {
    if (!this.isBrowsingTags) {
      this.isBrowsingTags = true;
      for (let i = 0; i < this.posts.length; i++) {
        for (let j = 0; j < this.posts[i].tags.length; j++) {
          const tag = this.posts[i].tags[j];
          if (!this.tagsArray.includes(tag)) {
            this.tagsArray.push(tag);
          }
        }
      }
    } else {
      this.isBrowsingTags = false;
    }
  }
  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
