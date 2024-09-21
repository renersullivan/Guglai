import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],      
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public escondeOuMostraResposta(event:any){
    const divClicada  = event.target
    const divAvo      = divClicada.parentElement.parentElement
    const divTarget   = divAvo.getElementsByClassName('resposta')

    divTarget[0].classList.toggle("esconde")
  }



}
