/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { Courses } from '../../courses.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
  selectedCourse: Courses;

  constructor(private route: ActivatedRoute,private categoryservice: CategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(CoursesId=>{
      const id= CoursesId.get('idcourse');
      const idc=CoursesId.get('idCategory');
      // eslint-disable-next-line eqeqeq
      this.selectedCourse=this.categoryservice.getCategoryList(idc).courses.find(ange=>ange.id==id);
      console.log(this.selectedCourse);
    });
  }

}
