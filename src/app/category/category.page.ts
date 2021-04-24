import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categoryList: Category[];

  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
    this.categoryList=this.categoryservice.getCategoryLists();
  }

}
