import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { Producteur } from '../producteur';
import { Vin } from '../vin';
import { VinService } from '../vin.service';
@Component({
  selector: 'app-openstreetmap',
  templateUrl: './openstreetmap.component.html',
  styleUrls: ['./openstreetmap.component.css']
})
export class OpenstreetmapComponent implements OnInit {
   macarte:any;
   marker:any;
   regionViticole!:string;
   vins: Vin[]=[];
   vinsregion: Vin[]=[];
   vin!:Vin;
   producteurs:Producteur[]=[]
  constructor(private service:VinService, private router:Router) { }

  ngOnInit(): void {
    this.initMap();
  }
   initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    this.macarte = L.map('map').setView([48.852969, 2.349903], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      // Il est toujours bien de laisser le lien vers la source des données
      attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
      minZoom: 1,
      maxZoom: 20
    }).addTo(this.macarte);
    // Nous parcourons la liste des villes
    
    
    
  }
onSubmit()
{
  
  this.getProducteurByRegionViticole(this.regionViticole);

  for (let i = 0; i < this.producteurs.length; i++){
  this.service.RechercheRegion(this.producteurs[i].ville).subscribe(data => {
   // console.log(data);
  this.marker = L.marker([data[0].lat, data[0].lon]).addTo(this.macarte);  
   
  
  
})
//this.marker.bindPopup(this.producteurs[i]);
}
      
}
private getVins(){
  this.service.getVinsList().subscribe(data => {
    this.vins = data;
  });
}
voirTouteLesRegion()
{
  this.getVins();
  for (let i = 0; i < this.vins.length; i++) {
    this.service.RechercheRegion(this.vins[i].region).subscribe(data => {
      console.log(data);
  
    this.marker = L.marker([data[0].lat, data[0].lon]).addTo(this.macarte);         	
  })
  }
}
 getVinByRegion(region:string)
 {
  this.service.RechercheVinByRegion(region).subscribe(data => {
    this.vinsregion = data;
  });
 }
 getProducteurByRegionViticole(regionviticole:string)
 {
  this.service.RechercheProducteurRegionViticole(regionviticole).subscribe(data => {
    this.producteurs = data;
    console.log(data);
  });
 }
 retour()
 {
   this.router.navigate(['nosproducteurs']);
 }
}
