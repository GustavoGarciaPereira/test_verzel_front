import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-listing.component.html',
  styleUrl: './car-listing.component.scss'
})
export class CarListingComponent {
  cars = [
    { title: 'Carro A', price: 50000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    { title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },
    //{ title: 'Carro B', price: 60000, imageUrl: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMTkzMjA4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjU3Mzc4MDAxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=' },

    // Adicione mais carros conforme necessário
  ];
}
