import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
      this.posts = database.list('posts');
    }

  getPosts() {
    return this.posts;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getPostById(postId: string) {
    return this.database.object('posts/' + postId);
  }

  updatePost(localUpdatedPost) {
    const postEntryInFirebase = this.getPostById(localUpdatedPost.$key);
    postEntryInFirebase.update({title: localUpdatedPost.title, body: localUpdatedPost.body, imgUrl: localUpdatedPost.imgUrl});
  }

  deletePost(localPostToDelete) {
    const postEntryInFirebase = this.getPostById(localPostToDelete.$key);
    postEntryInFirebase.remove();
  }
}
