import { Component, OnInit } from '@angular/core';
import { MoovieService } from '../providers/moovie/moovie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    MoovieService
  ]
})
export class FeedPage implements OnInit {
  public objetoFeed={
    titulo: "Robson Santos",
    data: "November 5, 1997",
    descricao: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin",
    destino: "Madison, WI"
  }
  public nomeUsuario:string  ="Robson Santos ";

  public listaFilmes= new Array<any>();

  constructor(private movieProvaider: MoovieService) { }

  public somaDoisNumeros(num1:number, num2:number ):void{
    alert(num1+num2);
  }

  ngOnInit() {
   this.movieProvaider.getLetesMovies().subscribe(
    data => {
 
      const response = (data as any);
      const objetoRetorno = response;
      this.listaFilmes =objetoRetorno.results;
      // console.log(objetoRetorno);
     
    },error => {

    
    console.log(error); // error message as string
  

  });
  }

}
