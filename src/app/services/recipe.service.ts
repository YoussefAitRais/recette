import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://api.example.com/recipes'; // Replace with your API URL

  constructor(private http : HttpClient) { }

  getAllRecipes():  Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
