import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vin } from '../vin';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-nosvincompte',
  templateUrl: './nosvincompte.component.html',
  styleUrls: ['./nosvincompte.component.css']
})
export class NosvincompteComponent implements OnInit {
  p:any;
  vins: Vin[]=[];
  couleur: string="";
  region :string="";
  prix:string="";
  constructor(private vinService: VinService,
    private router: Router) { }

  ngOnInit(): void {
    this.getVins();
  }
  getVins(){
    this.vinService.getVinsList().subscribe(data => {
      this.vins = data;
    });
  }
  vinDetails(id: number){
    this.router.navigate(['wine-details', id]);
  }
  retour()
  {
    this.router.navigate(['wines']);
  }
  getByPrix(prix:string)
  {
    this.vinService.RecherchePrix(prix).subscribe(data => {
      this.vins = data;
    });
   
  }
  getByPrixRegion(region:string,prix:string)
  {
    this.vinService.RechercheRegionPrix(region,prix).subscribe(data => {
      this.vins = data;
      console.log(this.vins)
    });
  }
  getByCouleurPrix(couleur:string,prix:string)
  {
    this.vinService.RechercheCouleurPrix(couleur,prix).subscribe(data => {
      this.vins = data;
      console.log(this.vins)
    });
  }
  getByCouleurRegion(couleur:string,region:string)
  {
    this.vinService.RechercheCouleurRegion(couleur,region).subscribe(data => {
      this.vins = data;
      console.log(this.vins)
    });
  }
  getByCouleurRegionPrix(couleur:string,region:string,prix:string)
  {
    this.vinService.RechercheCouleurRegionPrix(couleur,region,prix).subscribe(data => {
      this.vins = data;
      console.log(this.vins)
    });
  }
  rechercheByRegion(region:string)
  {
    this.vinService.RechercheVinByRegion(region).subscribe(data => {
      this.vins= data;
    });
  
  }
  private getVinCouleur(couleur:string){
    this.vinService.RechercheParCouleur(couleur).subscribe(data => {
      this.vins = data;
    });
  }
  onSubmit()
  {
    if(this.prix=="" && this.region=="" && this.couleur==""){this.getVins();}
    if (this.prix!="" && this.region=="" && this.couleur==""){ this.getByPrix(this.prix);}
    if (this.prix=="" && this.region!="" && this.couleur==""){ this.rechercheByRegion(this.region);}
    if (this.prix=="" && this.region=="" && this.couleur!=""){ this.getVinCouleur(this.couleur);}
    if (this.prix!="" && this.region=="" && this.couleur==""){ this.getByPrix(this.prix);}
    if(this.prix!="" && this.region!="" && this.couleur==""){this.getByPrixRegion(this.region,this.prix);}
    if(this.prix!="" && this.region=="" && this.couleur!=""){this.getByCouleurPrix(this.couleur,this.prix);}
    if(this.prix=="" && this.region!="" && this.couleur!=""){this.getByCouleurRegion(this.couleur,this.region);}
    if(this.prix!="" && this.region!="" && this.couleur!=""){this.getByCouleurRegionPrix(this.couleur,this.region,this.prix);}


    //this.rechercheByRegion(this.region);
  }
  voirTout()
  {
    this.getVins();
    
  }

}
