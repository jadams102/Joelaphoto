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
  tags: string[] = [];
  testImgURL: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addTags(tags: string) {
    const tagsArray = tags.split(',');
    for (let i = 0; i < tagsArray.length; i++) {
      const trim = (tagsArray[i].trim()).toLowerCase();
      this.tags.push(trim);
      }
  }

  loadTestUrl(url: string) {
    this.testImgURL = url;
  }

  removeTag(idx) {
    this.tags.splice(idx, 1);
  }

  submitPost(title: string, imgUrl: string, body: string) {
    const currentDate = new Date();
    const dateString = currentDate.getMonth() + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
    const newPost = new Post(title, imgUrl, body, this.tags);
    newPost.postDate = dateString;
    console.log (newPost);
    this.postService.addPost(newPost);
  }
}
