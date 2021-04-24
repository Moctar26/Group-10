/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
selectedCategory: Category;
  constructor(private route: ActivatedRoute,private categoryService: CategoryService) { }

  ngOnInit() {

    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.route.paramMap.subscribe(CategoryId=>{
      const id=CategoryId.get('idCategory');
      this.selectedCategory=this.categoryService.getCategoryList(id);
      console.log(this.selectedCategory);
    });
  }
  }

