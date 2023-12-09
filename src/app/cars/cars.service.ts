import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})

export class CarsService {
  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiUrl;

  fetchData(): Observable<any>{
    console.log('Ambiente:', environment.production ? 'produção' : 'desenvolvimento');
    console.log('URL da API:', environment.apiUrl);
    return this.http.get(`${this.apiUrl}/cars`);

  }

}
// export class CarsService {

//   fetchData(): carsServiceInterface[] {
//     http: HttpClient;
//     return http.get<carsServiceInterface[]>('http://127.0.0.1:8000/cars');//[{ title: 'Carro A', price: 50000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' }]
//   }
//   // fetchData(): carsServiceInterface[]{
//   //   return [
//   //     { title: 'Carro A', price: 50000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
//   //     //{ title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },

//   //     // Adicione mais carros conforme necessário
//   //   ];//#this.http.get<carsServiceInterface[]>('http://127.0.0.1:8000/cars');
//   // }
// }
