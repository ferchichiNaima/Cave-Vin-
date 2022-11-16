import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Vin } from '../vin';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-root',
  templateUrl: './vin-list.component.html',
  styleUrls: ['./vin-list.component.css']
})
export class VinListComponent implements OnInit {
  p:any;
  vins: Vin[]=[];
  couleur: string="";
  region :string="";
  prix:string="";
  idcompte!:number;
  constructor(private vinService: VinService,
    private router: Router) { }

  ngOnInit(): void {
    this.idcompte=Number(sessionStorage.getItem('id'));
    this.getVinsParCompte(this.idcompte);
  }

  private getVins(){
    this.vinService.getVinsList().subscribe(data => {
      this.vins = data;
    });
  }
  private getVinsParCompte(compte:number){
    this.vinService.RechercheParIdCompte(compte).subscribe(data => {
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
      this.getVinsParCompte(this.idcompte);
    })
  }
 

}
