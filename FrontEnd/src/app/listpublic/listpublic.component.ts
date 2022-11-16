import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vin } from '../vin';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-listpublic',
  templateUrl: './listpublic.component.html',
  styleUrls: ['./listpublic.component.css']
})
export class ListpublicComponent implements OnInit {
  region :string="";
  prix:string="";
  p:any;
  vins: Vin[]=[];
  vinscouleur: Vin[]=[];
  vinsregion:Vin[]=[];
  vinsprix:Vin[]=[];
  vinsregionprix:Vin[]=[];
  vinscouleurregion:Vin[]=[];
  vinscouleurprix:Vin[]=[];
  vinscouleurregionprix:Vin[]=[];
  couleur: string="";
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
    this.router.navigate(['acceuil']);
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

private getVinCouleur(couleur:string){
  this.vinService.RechercheParCouleur(couleur).subscribe(data => {
    this.vins = data;
  });
}
  voirTout()
  {
    this.getVins();
    
  }
  getByRegion(region:string)
  {
    this.vinService.RechercheRegion(region).subscribe(data => {
      this.vinsregion = data;
    });
  }
  rechercheByRegion(region:string)
  {
    this.vinService.RechercheVinByRegion(region).subscribe(data => {
      this.vins= data;
    });
  
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

}
