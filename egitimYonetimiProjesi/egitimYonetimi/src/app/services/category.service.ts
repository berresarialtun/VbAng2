import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  url:string ="https://localhost:44341/api/Categories";

  getAllCategories():Observable<Category[]>{
    return this.httpClient
               .get<Category[]>(this.url);
  }
}
