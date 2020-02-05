import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-building-reusable-favorite',
  templateUrl: './building-reusable-favorite.component.html',
  styleUrls: ['./building-reusable-favorite.component.css']
})
export class BuildingReusableFavoriteComponent implements OnInit {
  // @Input() isFavorite: boolean;
  // aliasing input properties
  // tslint:disable-next-line:no-input-rename
  @Input('is-favorite') isSelected: boolean;

  // tslint:disable-next-line:no-output-native
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    // we use that to raise or publish an event, which basically means notifying others that something has happened.
    this.click.emit({newValue: this.isSelected});
  }
  constructor() { }

  ngOnInit() {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
