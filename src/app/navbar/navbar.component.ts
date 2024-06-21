import { Component,ElementRef, OnInit } from '@angular/core';
import { DropDirective } from './drop.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropDirective,NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private el : ElementRef){}

  ngOnInit(): void {
    this.el = this.el
  }

  /**
   * masquer dropList
  */
  removeHide(){
    this.el.nativeElement.querySelector('#dropService').classList.add('hide')
    this.el.nativeElement.querySelector('#dropDevis').classList.add('hide')
  }

  /**
   * Afficher ou masquer la liste du menu
   */
  dropMenu(){
  if(!!this.el.nativeElement.querySelector('#list').classList.contains('display')){
    this.el.nativeElement.querySelector('#list').classList.remove('display')
  }else{
    this.el.nativeElement.querySelector('#list').classList.add('display')
  }
  }

  /**
   * Afficher ou masquer liste  services
   */
  dropService(){
    if(!!this.el.nativeElement.querySelector('#lesServices').classList.contains('display')){
      this.el.nativeElement.querySelector('#lesServices').classList.remove('display')
    }else{
      this.el.nativeElement.querySelector('#lesServices').classList.add('display')
    }
  }

  /**
   * Afficher ou masquer liste  Devis
   */
  dropDevis(){
    if(!!this.el.nativeElement.querySelector('#lesDevis').classList.contains('display')){
      this.el.nativeElement.querySelector('#lesDevis').classList.remove('display')
    }else{
      this.el.nativeElement.querySelector('#lesDevis').classList.add('display')
    }
  }

}
