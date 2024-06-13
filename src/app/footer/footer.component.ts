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
    const element = this.el.nativeElement.querySelector('#dropService')
    if(element.classList.contains('vide')){
      element.classList.remove('vide')
    }else{
      element.classList.add('vide')
    }
  }

  /**
   * masquer ou afficher liste de devis
   */
  dropDevis(){
    const element = this.el.nativeElement.querySelector('#dropDevis')
    if(element.classList.contains('vide')){
      element.classList.remove('vide')
    }else{
      element.classList.add('vide')
    }
  }
}
