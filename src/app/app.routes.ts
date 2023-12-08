import { Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { ListagemEntradaComponent } from './listagem-entrada/listagem-entrada.component';
import { LoginComponent } from './login/login.component';
import { CadastroCarComponent } from './cadastro-car/cadastro-car.component';

export const routes: Routes = [
  {path:'cadastro', component: CadastroUsuarioComponent},
  {path:'cadastro-car', component: CadastroCarComponent},
  {path:'welcome', component: ListagemEntradaComponent},
  {path:'login', component: LoginComponent},
  {path:'',redirectTo:'welcome', pathMatch:'full'},
  {path:'*',redirectTo:'welcome', pathMatch:'full'},
  {path:'**',redirectTo:'welcome', pathMatch:'full'},
];
