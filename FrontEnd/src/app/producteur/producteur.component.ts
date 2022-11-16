import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producteur } from '../producteur';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-producteur',
  templateUrl: './producteur.component.html',
  styleUrls: ['./producteur.component.css']
})
export class ProducteurComponent implements OnInit {
   producteur:Producteur=new Producteur;
   msg!:string
  constructor(private router:Router, private vinService:VinService) { }

  ngOnInit(): void {
  }
  retour()
  {
    this.router.navigate(['create-wine']);
  }
  onSubmit()
  {
   
    
      this.producteur.idcompte=Number(sessionStorage.getItem('id'));
      this.vinService.AddProducteur(this.producteur).subscribe( data =>{
  
       
        this.router.navigate(['create-wine'])
  
      },
      error => console.log(error));
      this.msg="Il existe déja un producteur associé à ce compte ";
    }
  
}


