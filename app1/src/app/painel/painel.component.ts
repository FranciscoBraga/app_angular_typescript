import { Component, OnInit,Output, EventEmitter, OnDestroy } from '@angular/core';
import {Frase} from '../shared/frase.model';
import {FRASES} from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit , OnDestroy
{
  public instrucao : string = "Traduza a frase."
  public frases :  Frase[] = FRASES
  public resposta : string = ""

  public progresso : number = 0

  public  rodada : number = 0
  public rodadaFrase : Frase

  public tentativas: number = 3

  @Output() public encerrarJogo : EventEmitter<string> = new EventEmitter() 
  constructor() 
  {
    this.atualizaRodada()
    
   }

  ngOnInit() 
  {

  }

  ngOnDestroy()
  {
  
  }



  public atualizaResposta(resposta : Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  
  }

  public verificarResposta(): void{
   if(this.rodadaFrase.frasePortugues == this.resposta){
     

    //incrementa rodada para que possa mudar a frase apresentada no painel
    this.rodada++
    
    if(this.rodada >=3){
      this.encerrarJogo.emit('Vitória')
    }
    this.atualizaRodada()

    //modifica o valor da variável progresso  baseado na quantidade de frases que existem
    this.progresso = this.progresso + (100/this.frases.length)
    
  
   }else{
     
    this.tentativas --
    
    if(this.tentativas <= 0){
      this.encerrarJogo.emit('Derrota')
    }
   }
  }

  public atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ""
  }

}
