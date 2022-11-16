import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producteur } from '../producteur';


import { Vin } from '../vin';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-vin-details',
  templateUrl: './vin-details.component.html',
  styleUrls: ['./vin-details.component.css']
})
export class VinDetailsComponent implements OnInit {

  
  id!: number
  vin!: Vin
  producteur!:Producteur
  constructor(private route: ActivatedRoute, private vinService: VinService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.vin = new Vin();
    this.producteur=new Producteur()
    this.vinService.getVinById(this.id).subscribe( data => {
      this.vin = data;
    });
    this.vinService.RechercheProducteurParIdCompte(Number(sessionStorage.getItem('id'))).subscribe( data => {
      this.producteur = data;
    });
  }
  retour()
  {
    this.router.navigate(['wines']);
  }
  RechercheParProducteur(idcompte:number)
  {
    this.vinService.RechercheProducteurParIdCompte(idcompte).subscribe(data => {
      console.log(data);
    });
  }
  

}
