import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-linked-in';

  movieInParent : Movie = {
    id: 1,
    title: "You",
    date: "12.10.2022",
    director: "Lorena Cocora",
    isSelected: false
  };

  onButtonPressed() : void{
    alert("Buton pressed in Child displayed in Parent");
  }
}
