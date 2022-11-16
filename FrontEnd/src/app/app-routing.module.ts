import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { CreateVinComponent } from './create-vin/create-vin.component';
import { GuideComponent } from './guide/guide.component';
import { ListpublicComponent } from './listpublic/listpublic.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NosproducteursComponent } from './nosproducteurs/nosproducteurs.component';
import { NosvincompteComponent } from './nosvincompte/nosvincompte.component';
import { OpenstreetmapComponent } from './openstreetmap/openstreetmap.component';
import { ProducteurComponent } from './producteur/producteur.component';
import { PubliccouleurComponent } from './publiccouleur/publiccouleur.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateVinComponent } from './update-vin/update-vin.component';
import { VinDetailsComponent } from './vin-details/vin-details.component';
import { VinListComponent } from './vin-list/vin-list.component';
import { VincouleurComponent } from './vincouleur/vincouleur.component';

const routes: Routes = [
  {path: 'wines', component: VinListComponent},
  {path: 'create-wine', component: CreateVinComponent},
  {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  {path: 'update-wine/:id', component: UpdateVinComponent},
  {path: 'wine-details/:id', component: VinDetailsComponent},
  {path: 'login',component: LoginComponent},
  {path: 'registration',component: RegistrationComponent},
  {path: 'publicList',component: ListpublicComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'couleur',component: VincouleurComponent},
  {path: 'couleurpublic',component: PubliccouleurComponent},
  {path: 'comptenosvin',component:  NosvincompteComponent},
  {path: 'producteur',component:  ProducteurComponent},
  {path: 'map',component:  OpenstreetmapComponent},
  {path: 'nosproducteurs',component:  NosproducteursComponent},
  {path: 'acceuil',component:  AcceuilComponent},
  {path: 'guide',component:  GuideComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
