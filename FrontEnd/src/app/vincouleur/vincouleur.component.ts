import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vin } from '../vin';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-vincouleur',
  templateUrl: './vincouleur.component.html',
  styleUrls: ['./vincouleur.component.css']
})
export class VincouleurComponent implements OnInit {

  p:any;
  vins: Vin[]=[];
  couleur!: string;
  constructor(private vinService: VinService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  private getVins(){
    this.vinService.getVinsList().subscribe(data => {
      this.vins = data;
    });
  }
  private getVinCouleur(couleur:string,id:number){
    
    this.vinService.RechercheParCouleurCompte(couleur,id).subscribe(data => {
      this.vins = data;
    });
  }

  vinDetails(id: number){
    this.router.navigate(['wine-details', id]);
  }

  updateVin(id: number){
    this.router.navigate(['update-wine', id]);
  }

  deleteVin(id: number){
    this.vinService.deleteVin(id).subscribe( data => {
      console.log(data);
      this.getVins();
    })
  }
  onSubmit()
  {
    this.getVinCouleur(this.couleur,Number(sessionStorage.getItem('id')));
  }
  retour()
  {
    this.router.navigate(['wines']);
  }
}
