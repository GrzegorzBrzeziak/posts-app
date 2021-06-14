import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../model/post.model";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.css']
})
export class PostItemsComponent implements OnInit {

  public post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') || '0';
    this.postService.fetchPost(id).subscribe(
      (post: Post) => {
        this.post = post;
      }
    )

  }

}
