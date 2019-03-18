import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public finalizaJogo : boolean = true
  public tipoEncerramento : string 
 
  public encerrarJogo(tipo: string): void
  {
    this.finalizaJogo = false
    console.log(tipo)
    this.tipoEncerramento = tipo
    
  }

  public reinicarJogo(): void
  {
    this.finalizaJogo = true
    this.tipoEncerramento = undefined
  }
}
