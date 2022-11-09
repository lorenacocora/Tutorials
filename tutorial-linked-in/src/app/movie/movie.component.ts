import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movieInChild: any;

  @Output()
  buttonPressed = new EventEmitter();

  onButtonClick() : void{
    this.movieInChild.isSelected = true;
    this.buttonPressed.emit();

  }

  constructor() { }

  ngOnInit(): void {
  }

}
