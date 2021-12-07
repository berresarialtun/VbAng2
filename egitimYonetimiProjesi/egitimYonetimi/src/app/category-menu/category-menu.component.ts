import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Category } from '../models/category.model';
import { Categories } from '../models/mocks/category.mock';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  
  categories: Category[];

  ngOnInit(): void {
     this.httpClient.get<Category[]>('https://localhost:44341/api/Categories')
                    .pipe(tap(x=>console.log(x)))
                    .subscribe((data:Category[])=> this.categories = data);
                    
  }

}
