import { Component, ElementRef } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { choix } from './Choix';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-acceuil',
    standalone: true,
    templateUrl: './acceuil.component.html',
    styleUrl: './acceuil.component.css',
    imports: [NavbarComponent,FooterComponent,NgOptimizedImage]
})
export class AcceuilComponent {

    Choix = choix 

    constructor(private el:ElementRef){

    }

    /**
     * Play
    */
   playVideo(){
    const play = this.el.nativeElement.querySelector('#video').querySelector('video')
    const bouton = this.el.nativeElement.querySelector('#videoImg')
    play.controls = true
    bouton.style.display='none'
   }

   /* Animation */
}
