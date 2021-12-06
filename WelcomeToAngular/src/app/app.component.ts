import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'WelcomeToAngular';
  intro : string = 'Bu, ilk Angular denemesi'; 
}
