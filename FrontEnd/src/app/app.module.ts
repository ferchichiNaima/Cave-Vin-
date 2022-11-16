import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { CreateVinComponent } from './create-vin/create-vin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VinDetailsComponent } from './vin-details/vin-details.component';
import { UpdateVinComponent } from './update-vin/update-vin.component';
import { VinListComponent } from './vin-list/vin-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { ListpublicComponent } from './listpublic/listpublic.component';
import { ContactComponent } from './contact/contact.component';
import { ProducteurComponent } from './producteur/producteur.component';
import { VincouleurComponent } from './vincouleur/vincouleur.component';
import { PubliccouleurComponent } from './publiccouleur/publiccouleur.component';
import { NosvincompteComponent } from './nosvincompte/nosvincompte.component';
import { MapComponent } from './map/map.component';
import { OpenstreetmapComponent } from './openstreetmap/openstreetmap.component';
import { NosproducteursComponent } from './nosproducteurs/nosproducteurs.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GuideComponent } from './guide/guide.component';




@NgModule({
  declarations: [
    AppComponent,
    VinListComponent,
    CreateVinComponent,
    UpdateVinComponent,
   VinDetailsComponent,
   LoginComponent,
   RegistrationComponent,
 
   ListpublicComponent,
   ContactComponent,
   ProducteurComponent,
   VincouleurComponent,
   PubliccouleurComponent,
   NosvincompteComponent,
   MapComponent,
   OpenstreetmapComponent,
   NosproducteursComponent,
   AcceuilComponent,
   GuideComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
