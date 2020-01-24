import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class MoovieService {
private baseApiPath = "https://api.themoviedb.org/3"
  constructor(private http: HttpClient) { 
    console.log("Hello MoovieProvider");
  }

  getLetesMovies(page = 1): Observable<any[]> {
   return this.http.get<any[]>(this.baseApiPath + `/movie/popular?page=${page}&api_key=2479db4c65628aa2c78d0ae383a1875a` );
  }

  getMoviesDeatil(filmeid) {
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=2479db4c65628aa2c78d0ae383a1875a` );
   }
}
