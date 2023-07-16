import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SR_AJ_Assigment';
  constructor(){
    console.log('Title of assignment',this.title);
  }
}
