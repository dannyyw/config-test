import {Component} from '@angular/core';
import {AppConfig} from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo: For Automation';
  components = AppConfig.COMPONENTS;
  elements = AppConfig.ELEMENTS;

  showElement(elementId) {
    for (const i in this.elements) {
      if (this.elements[i].id === elementId) {
        this.elements[i].status = !this.elements[i].status;
      }
    }
  }
}
