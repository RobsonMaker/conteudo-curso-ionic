import { Component, OnInit } from '@angular/core';
import { MoovieService } from '../providers/moovie/moovie.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    MoovieService
  ]
})
export class FeedPage {
  public objetoFeed = {
    titulo: "Robson Santos",
    data: "November 5, 1997",
    descricao: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin",
    destino: "Madison, WI"
  }
  public nomeUsuario: string = "Robson Santos ";

  public listaFilmes = new Array<any>();

  constructor(private movieProvaider: MoovieService, public loadingController: LoadingController, private router: Router) { }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  public infiniteScroll;

  public loading;

  public refresher;
  public isRefreshing: boolean = false;

  public page = 1;

 

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando, aguarde...',
      duration: 500
      
    }),
      this.loading.present();

  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadFilmes();
  }

  ionViewDidEnter() {
    this.loadFilmes();
  }


  loadData(event) {
    // setTimeout(() => {
    //   console.log('Done');
    //   event.target.complete();

    //   // App logic to determine if all data is loaded
    //   // and disable the infinite scroll
    //   if (data.length == 1000) {
    //     event.target.disabled = true;
    //   }
    // }, 500);
    this.page ++;

    this.infiniteScroll = event;

    
    this.loadFilmes(true);

    
  }

  loadFilmes(newPage: boolean = false){
    this.presentLoading();

    this.movieProvaider.getLetesMovies(this.page).subscribe(
      data => {


        const response = (data as any);
        const objetoRetorno = response;
        
        console.log(objetoRetorno);

        if(newPage){
          this.listaFilmes =  this.listaFilmes.concat(objetoRetorno.results);
         this.infiniteScroll.target.complete();
        }else{
          this.listaFilmes = objetoRetorno.results;
        }

        setTimeout(() => {
          this.loading.dismiss();
        }, 500);

        if(this.isRefreshing){
          this.refresher.target.complete();
          this.isRefreshing = false;
        }

      }, error => {

        setTimeout(() => {
          this.loading.dismiss();
        }, 500);

        if(this.isRefreshing){
          this.refresher.target.complete();
          this.isRefreshing = false;
        }
        console.log(error); // error message as string



      });
  }



  openDetalhes(filme){
    console.log(filme);
    
    this.router.navigate(['/filmes-detalhes',  { id: filme.id }]);
  }


}
