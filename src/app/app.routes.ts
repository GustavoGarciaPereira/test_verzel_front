import { Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { ListagemEntradaComponent } from './listagem-entrada/listagem-entrada.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path:'cadastro', component: CadastroUsuarioComponent},
  {path:'welcome', component: ListagemEntradaComponent},
  {path:'login', component: LoginComponent},
  {path:'',redirectTo:'welcome', pathMatch:'full'},
  {path:'*',redirectTo:'welcome', pathMatch:'full'},
  {path:'**',redirectTo:'welcome', pathMatch:'full'},
];
