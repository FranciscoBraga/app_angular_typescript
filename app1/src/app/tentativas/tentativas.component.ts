import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit , OnChanges
{
 
  @Input() public tentativa : number
  
  public coracaoes : Coracao[] = [new Coracao(true),new Coracao(true), new Coracao(true)]
  constructor() 
  {
    
   }

   ngOnChanges()
   {
    let indice: number  = 0
    if(this.tentativa !== this.coracaoes.length)
    {
       indice = this.coracaoes.length - this.tentativa
      console.log(indice)
      this.coracaoes[indice-1].cheio = false
     
    
    }
   
   }

  ngOnInit() 
  {
   
  }

}
