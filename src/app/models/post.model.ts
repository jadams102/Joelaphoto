import { Comment } from './comment.model';

export class Post {
  newComment = new Comment ('This is the default comment');
  public comments: Comment[] = [this.newComment];
  public postDate = '';
  public likes = 0;
  constructor(public title: string, public imgUrl: string, public body: string, public tags: string[]) {}
}
