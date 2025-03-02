import { Component, OnInit } from '@angular/core';
import {IonicModule, MenuController} from "@ionic/angular";

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  imports: [
    IonicModule,
  ],
  standalone: true
})
export class NavHeaderComponent  implements OnInit {

  constructor(public menuController: MenuController) { }

  ngOnInit() {}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
