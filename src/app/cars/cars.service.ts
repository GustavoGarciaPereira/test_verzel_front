import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { carsServiceInterface } from './cars.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class CarsService {

  constructor(private http: HttpClient) { }
  data = [
    { title: 'Carro B', price: 50000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 300, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' }

  ]

  fetchData(): Observable<any>{

    return this.http.get('http://127.0.0.1:8000/cars');

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
