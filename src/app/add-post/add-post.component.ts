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
  testImgURL;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.testImgURL = 'https://i.imgur.com/ujBlDNz.jpg';
  }

  addTags(tags: string) {
    const tagsArray = tags.split(',');
    for (let i = 0; i < tagsArray.length; i++) {
      const trim = (tagsArray[i].trim()).toLowerCase();
      if (!tagsArray.contains(trim)) {
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
    this.postService.addPost(newPost);
  }
}
