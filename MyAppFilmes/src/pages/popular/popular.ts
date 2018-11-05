import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
  providers: [MovieProvider]
})
export class PopularPage {

  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public provider:MovieProvider) {
  }

  ionViewDidLoad() {
  

      this.provider.getPopularMovies().subscribe(
      
      data =>{
      
      const retorno = (data as any);
      
      this.lista_filmes = retorno.results;
      
      console.log(this.lista_filmes);
      
      
      
      },error =>{
      
      console.log(error);
      
      }
      
      )
      
      
      
      
      
      
      
      }
      
      

}
