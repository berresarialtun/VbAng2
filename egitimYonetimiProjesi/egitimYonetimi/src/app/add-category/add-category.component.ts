import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category = new Category();
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  addCategory(form: NgForm) {
    console.log(form);
    console.log(form.valid);
    console.log('eklenecek kategori', this.category);
    if (form.valid) {
      this.categoryService.addNewCategory(this.category)
          .subscribe((gelen: Category) => {alert(gelen.name + " başarıyla eklendi"); location=location});
    }


  }

}
