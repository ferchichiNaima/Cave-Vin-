import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Vin } from '../vin';
import { VinService } from '../vin.service';

@Component({
  selector: 'app-update-vin',
  templateUrl: './update-vin.component.html',
  styleUrls: ['./update-vin.component.css']
})
export class UpdateVinComponent implements OnInit {

  id!: number;
  vin: Vin = new Vin();
  constructor(private vinService: VinService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.vinService.getVinById(this.id).subscribe(data => {
      this.vin = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.vinService.updateVin(this.id, this.vin).subscribe( data =>{
      this.goToVinList();
    }
    , error => console.log(error));
  }

  goToVinList(){
    this.router.navigate(['/wines']);
  }

  retour()
  {
    this.router.navigate(['wines']);
  }
}
