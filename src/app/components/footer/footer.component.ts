import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {IonContent, IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class FooterComponent  implements OnInit {
  expandedAccordion: string | null = null;

  constructor() { }

  ngOnInit() {}
}
