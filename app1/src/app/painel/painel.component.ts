import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model';
import {FRASES} from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit 
{
  public instrucao : string = "Traduza a frase."
  public frases :  Frase[] = FRASES
  public resposta : string = ""

  public progresso : number = 0

  public  rodada : number = 0
  public rodadaFrase : Frase

  public tentativa: number = 3
  constructor() 
  {
    this.atualizaRodada()
    
   }

  ngOnInit() {
  }

  public atualizaResposta(resposta : Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  
  }

  public verificarResposta(): void{
   if(this.rodadaFrase.frasePortugues == this.resposta){
    alert("Frase Correta")

    //incrementa rodada para que possa mudar a frase apresentada no painel
    this.rodada++
    this.atualizaRodada()

    //modifica o valor da variável progresso  baseado na quantidade de frases que existem
    this.progresso = this.progresso + (100/this.frases.length)
    console.log(this.progresso)
  
   }else{
     
    this.tentativa --
    if(this.tentativa <= 0){
      alert("você perdeu")
    }
   }
  }

  public atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ""
  }

}
