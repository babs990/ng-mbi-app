import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private el : ElementRef){}

  /**
   * masquer ou afficher liste services
   */
  dropService(){
    let element = this.el.nativeElement.querySelector('#dropService')
    if(element.classList.contains('vide')){
      element.classList.remove('vide')
    }else{
      element.classList.add('vide')
    }
  }
}
