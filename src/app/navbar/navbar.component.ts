import { Component,ElementRef } from '@angular/core';
import { DropDirective } from './drop.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private el : ElementRef){}

  /**
   * masquer dropList
  */
  removeHide(){
    this.el.nativeElement.querySelector('#dropService').classList.add('hide')
    this.el.nativeElement.querySelector('#dropDevis').classList.add('hide')
  }
}
