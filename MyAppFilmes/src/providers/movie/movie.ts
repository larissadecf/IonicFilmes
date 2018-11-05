import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getPopularMovies(){

    let url = 'https://api.themoviedb.org/3/movie/popular?page=1&language=pt-BR&api_key=5a0a7088c8af542b917b3d05a55fead9'
    
    return this.http.get(url);
    
    }

    getLatestMovies(){

      let url = 'https://api.themoviedb.org/3/movie/latest?page=1&language=pt-BR&api_key=5a0a7088c8af542b917b3d05a55fead9'
      
      return this.http.get(url);
      
      }
  
   
    

}
