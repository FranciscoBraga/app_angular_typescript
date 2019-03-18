
export class Coracao{
    
     public cheio : boolean
     public urlCoracaoVazio : string = ""
     public urlCoracaoCheio : string = ""

    constructor(){
        this.cheio = true
        this.urlCoracaoCheio = "/assets/coracao_cheio.png"
        this.urlCoracaoVazio = "/assets/coracao_vazio.png"
    }

    public exibeCoracao(){
        if(this.cheio == true){
           return this.urlCoracaoCheio
        }
        else{
            return this.urlCoracaoVazio
        }
    }
}