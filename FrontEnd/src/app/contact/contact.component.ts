import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producteur } from '../producteur';
import { User } from '../user';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  id!: number
  
  producteur!:Producteur
  user!:User
  constructor(private route: ActivatedRoute, private vinService: VinService, private router:Router) { }

  ngOnInit(): void {
    this.vinService.RechercheProducteurParIdCompte(Number(sessionStorage.getItem('id'))).subscribe( data => {
      this.producteur = data;
    });
    
    this.vinService.getUserById(Number(sessionStorage.getItem('id'))).subscribe( data => {
      this.user = data;
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
