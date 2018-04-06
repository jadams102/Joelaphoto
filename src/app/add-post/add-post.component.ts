import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [PostService]
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitPost(title: string, imgUrl: string, body: string) {
    const currentDate = new Date();
    const dateString = currentDate.getMonth() + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
    const newPost = new Post(title, imgUrl, body);
    newPost.postDate = dateString;
    console.log (newPost);
    this.postService.addPost(newPost);
  }
}
