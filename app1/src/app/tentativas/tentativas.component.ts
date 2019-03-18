import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit , OnChanges
{
 
  @Input() public tentativas : number
  
  public Coracao : Coracao[] = [new Coracao(),new Coracao(), new Coracao()]
  constructor() 
  {
    
   }

   ngOnChanges()
   {
    let indice: number  = 0
  
    if(this.tentativas !== this.Coracao.length)
    {
       indice = this.Coracao.length - this.tentativas
      this.Coracao[indice-1].cheio = false     
    }
   
   }

  ngOnInit() 
  {
   
  }

}
