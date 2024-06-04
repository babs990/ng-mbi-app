import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropDirective]',
  standalone: true
})
export class DropDirective {

  private dropIcon: string = "Images/dropIcon.svg"
  private dropIconOrange: string ="Images/dropIconOrange.svg"

  constructor(private el : ElementRef) { 
    this.setDrop(this.dropIcon)
  }
  
  @HostListener('mouseenter') onMousseEnter(){
    this.setDrop(this.dropIconOrange)
    this.removeHide()
  }
  @HostListener('mouseleave') onMousseLeave(){
    this.setDrop(this.dropIcon)
  }

  /* Recuperation et modification dropIcon */
  private setDrop(drop : string){
    if(this.el.nativeElement.querySelector('img')){
      this.el.nativeElement.querySelector('img').setAttribute("src",drop)
    }
  }

  /**
   * Afficher dropList
  */
  private  removeHide(){
    if(this.el.nativeElement){
      this.el.nativeElement.parentElement.querySelector('.list').classList.remove('hide')
    }
  }

}
