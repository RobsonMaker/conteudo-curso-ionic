import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

imoveis: Array<Imovel>;
  
 constructor(){}



getImoveis(){
     this.imoveis=[
       new Imovel("Apartamento", 400.000, "Rua Eduardo Viviani", "400", "Boa Vista", "Juiz de Fora", "MG"),
       new Imovel("Casa com 4 quartos, coisinha e sala", 120.000, "Rua Barbacena", "400", "Jardim Ana Rosa", "São Paulo", "SP")  
      ];

     
}

ngOnInit() {
  this.getImoveis();
}

}

export class Imovel {
  nome: string;
  valor: number;
  logadouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  mapa: string;



  constructor(nome: string,
    valor: number,
    logadouro: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    ){

      this.nome = nome;
      this.valor = valor;
      this.logadouro = logadouro;
      this.numero = numero;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.mapa = this.getMapa();
      
    }

  private getEndereco(){
    return this.logadouro+', '+this.numero+' - '+this.bairro+', '+this.cidade+' - '+this.estado;
  }

  private getMapa(){
    return'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red' + 
    this.getEndereco() + '&key=AIzaSyCkzLhI7ehgGm4RWno23IgfU0EZdN1XwnQ';
  }
  
}
