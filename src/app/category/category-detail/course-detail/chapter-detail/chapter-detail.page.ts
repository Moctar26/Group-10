/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { Chapters } from 'src/app/category/chapters.model';
import { Courses } from 'src/app/category/courses.model';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {
selectedChapter: Chapters;
  constructor(private route: ActivatedRoute,private categoryservice: CategoryService) { }

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.route.paramMap.subscribe(ChaptersId=>{
      const id= ChaptersId.get('idcourse');
      const idc=ChaptersId.get('idCategory');
      const idch=ChaptersId.get('idchapter');
      // eslint-disable-next-line eqeqeq
      this.selectedChapter=this.categoryservice.getCategoryList(idc).courses.find(courses=>courses.id==id).chapters.find(chapter=>chapter.id==idch);
      console.log(this.selectedChapter);
    });
  }

}
