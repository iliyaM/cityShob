import {Injectable} from '@angular/core';
import {Entity, EntityType} from '../interfaces/entity.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) {}

  searchItems(searchQuery: EntityType): Observable<Entity[]> {
    return this.http.get<Entity[]>(`http://localhost:3000/searchItems?type=${searchQuery}`);
  }
}


