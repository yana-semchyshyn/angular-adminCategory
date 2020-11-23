import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  userBlogs: Array<IBlog> = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    this.blogService.getJSONBlogs().subscribe(
      data => {
        this.userBlogs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
