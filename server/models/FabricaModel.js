const Palo = require('./PaloModel.js');
const Carta = require('./CartaModel.js');

module.exports = class Fabrica {
    
    constructor(){
        this.mazoMesclado = [];
        this.mazo = [];
        this.mazoUsuario = [];
        this.palo = [new Palo("♥"), new Palo("♦"), new Palo("♣"), new Palo("♠")];
        this.rotulas = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    }
    
    crear(){
        var valor = [0]
        if(this.mazo.length == 0){
            this.palo.forEach(element => {
                this.rotulas.forEach(element2 => {
                    if(element2 == "A"){
                        valor = [1,11]
                        
                    }
                    else if(element2 == "J" || element2 == "Q" || element2 == "K"){
                         valor = [10];
                    }
                    else{
                         valor = [parseInt(element2)];
                    }
                    
                    let carta = new Carta(element2,element.nombre, valor, "corazones");  
                    this.mazo.push(carta);
                })  
            })
        }
        return this.mazo  
    }
    
    mezclar(){

        this.mazoMesclado = this.mazo.sort(()=>{return Math.random() - 0.5})

        return this.mazoMesclado;
    }
    
    pedir(){
        const valorUnico = 52;
       

        if(this.mazoMesclado.length == valorUnico){
            
            let cont = 1;
            for(cont; cont <= 2; cont++){
                this.mazoUsuario.push(this.mazoMesclado.pop());
            }  
        }
        else{
           
            this.mazoUsuario.push(this.mazoMesclado.pop());
        }        

        return this.validar()
    }

    validar(){
        let valores = []
        let valoresAs = []
        let sumaTotal = 0;

        this.mazoUsuario.forEach(item => {
            if(item.rotula != "A"){
                valores.push(item.valor[0])
            }
            else{
                valoresAs = item.valor
            }
        })

        valores.forEach(item => {
            sumaTotal += item;
        })

        if(sumaTotal == 0 || sumaTotal < 21){
            if(valoresAs.length == 0){
                return [this.mazoUsuario, this.mazoMesclado]
            }
            else{
                valoresAs.forEach(item => {
                    if(item == 1){
                        let valorTemporal = sumaTotal += item;
                        if( valorTemporal < 21 && valorTemporal < 11){
                            return [this.mazoUsuario, this.mazoMesclado]
                        }
                        else if(valorTemporal == 21){
                            return ['gano con 1', 'gano con 1']
                        }
                    }
                    else{
                        let valorTemporal = sumaTotal += item;
                        if( valorTemporal < 21 && valorTemporal < 11){
                            return [this.mazoUsuario, this.mazoMesclado]
                        }
                        else if(valorTemporal == 21){
                            return ['gano con 10', 'gano con 10']
                        }
                    }
                })
            }
           
        }
        else if(sumaTotal == 21){
            return ['this.mazoUsuario', 'this.mazoMesclado']
        }
        
        
    }
}