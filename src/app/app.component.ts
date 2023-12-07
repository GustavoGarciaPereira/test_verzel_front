import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { CarListingComponent } from './car-listing/car-listing.component';
import { FooterComponent } from './footer/footer.component';
import { CarsService } from './cars/cars.service';
import { carsServiceInterface } from './cars/cars.interface';
import { ListagemEntradaComponent } from './listagem-entrada/listagem-entrada.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkActive, RouterLink,
    NavBarComponent,
    HeaderComponent,
    FilterComponent,
    CarListingComponent,
    FooterComponent,
    ListagemEntradaComponent,
    MatSlideToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
   // Corrigido para 'styleUrls' e array
})
export class AppComponent{
  title = 'vitrine_veiculos';
}
