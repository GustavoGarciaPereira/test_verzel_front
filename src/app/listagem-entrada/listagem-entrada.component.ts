import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FilterComponent } from '../filter/filter.component';
import { CarListingComponent } from '../car-listing/car-listing.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-listagem-entrada',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    HeaderComponent,
    FilterComponent,
    CarListingComponent,
    FooterComponent,
    ListagemEntradaComponent,
  ],
  templateUrl: './listagem-entrada.component.html',
  styleUrl: './listagem-entrada.component.scss'
})
export class ListagemEntradaComponent {

}
