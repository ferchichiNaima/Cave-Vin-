import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producteur } from '../producteur';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-nosproducteurs',
  templateUrl: './nosproducteurs.component.html',
  styleUrls: ['./nosproducteurs.component.css']
})
export class NosproducteursComponent implements OnInit {
  p!:any;
  producteurs: Producteur[]=[];
  constructor(private vinService: VinService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducteurs();
  }
getAllProducteurs()
{
  this.vinService.getProduteurs().subscribe(data => {
    this.producteurs = data;
  });

}
onSubmit()
{
  this.router.navigate(['/map']);
}
}
