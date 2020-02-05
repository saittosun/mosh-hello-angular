import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './building-reusable-favorite/building-reusable-favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // assignment-4
  tweet = {
    body: 'here is the body of tweet',
    likesCount: 10,
    isLiked: true
  };

  title = 'Angular';
  // building-reusable-favorite
  post = {
    title: 'Title',
    isFavorite: true
  };
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {// passing event data
    console.log('favorite changed!!!', eventArgs);
  }
}
