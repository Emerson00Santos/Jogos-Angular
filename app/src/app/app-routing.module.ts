import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

const routes: Routes = [
	{ path: '', component: MenuPrincipalComponent },
	{ path: 'menu-principal', component: MenuPrincipalComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
