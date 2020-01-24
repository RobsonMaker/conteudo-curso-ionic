import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MoovieService } from '../providers/moovie/moovie.service';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.page.html',
  styleUrls: ['./filmes-detalhes.page.scss'],
  providers: [
    MoovieService
  ]
})


export class FilmesDetalhesPage implements OnInit {
  

  constructor( public route: ActivatedRoute, public movieProvaider: MoovieService) { }
 
  public filmeId;
  public filme ;

  ngOnInit() {

    this.filmeId = this.route.snapshot.paramMap.get("id");

    this.movieProvaider.getMoviesDeatil(this.filmeId).subscribe(
      data => {


        const response = (data as any);
        const objetoRetorno = response;
        this.filme = objetoRetorno;
        console.log(this.filme);

       

        

      }, error => {

        

       
        console.log(error); // error message as string



      });
    
    
  }

}
