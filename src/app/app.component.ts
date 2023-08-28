import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-dashboard';
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
}
