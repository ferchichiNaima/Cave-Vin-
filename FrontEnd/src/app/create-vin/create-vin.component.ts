import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


import { Vin } from '../vin';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-create-vin',
  templateUrl: './create-vin.component.html',
  styleUrls: ['./create-vin.component.css']
})
export class CreateVinComponent implements OnInit {

  vin: Vin = new Vin();
  num!: number;
  message="";
  mm!:any;
  constructor(private vinService: VinService,
    private router: Router ) { }
   
  ngOnInit(): void {
    
   }
 
  saveVin(){
    
    this.vin.idCompte=Number(sessionStorage.getItem('id'));
    this.vinService.createVin(this.vin).subscribe( data =>{

     
      this.goToVinList();

    },
    error => {
    console.log(error),
    this.message="Ce compte n'est pas associé à aucun producteur,veuillez créer un producteur s'il vous plait "
    });
  }

  goToVinList(){
    this.router.navigate(['/wines']);
  }
  
  onSubmit(){
    console.log(sessionStorage.getItem('id')),
    console.log(this.vin);
    this.saveVin();
  }
  retour()
  {
    this.router.navigate(['wines']);
  }

}
