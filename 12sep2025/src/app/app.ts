import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counterapp');

  counter=0;

  inc(){
    this.counter++;
  }

  dec(){
    this.counter--;

  }
  reset(){
    this.counter=0;
  }
}
