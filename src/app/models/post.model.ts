export class Post {
  public postDate = '';
  constructor(public title: string, public imgUrl: string, public body: string, public tags: string[]) {}
}
