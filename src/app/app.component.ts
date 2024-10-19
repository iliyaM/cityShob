import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Entity, EntityType} from '../interfaces/entity.interface';
import {Observable} from 'rxjs';
import {SearchService} from '../services/search.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule
  ],
  providers: [SearchService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  EntityType = EntityType;

  entities$: Observable<Entity[]> | undefined;
  selectedEntity: EntityType = EntityType.ALL;

  isMenuOpen: { [key in EntityType]?: boolean } = {
    [EntityType.ZONES]: false,
    [EntityType.SITES]: false,
    [EntityType.PLACEMARKS]: false,
    [EntityType.LAYERS]: false
  };

  constructor(private searchService: SearchService) {
  }

  toggleMenu(entityType: EntityType): void {
    if (this.isMenuOpen[entityType]) {
      this.isMenuOpen[entityType] = false;

    } else {
      // Close all other menus
      Object.keys(this.isMenuOpen).forEach(key => {
        this.isMenuOpen[key as EntityType] = false;
      });

      // Open the clicked menu
      this.isMenuOpen[entityType] = true;

      // Update the selected entity
      this.selectedEntity = entityType;

      // Fetch the data for the selected entity type
      this.fetchData();
    }
  }


  fetchData(): void {
    this.entities$ = this.searchService.searchItems(this.selectedEntity);
  }

}
