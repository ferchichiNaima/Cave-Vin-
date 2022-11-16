import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Vin } from '../vin';
import { VinService } from '../vin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User= new User()
  msg='';
  constructor(private service:VinService,private router:Router) { }
  pass!:string;
  ngOnInit(): void {
  }
  RegisterUser()
  {
    this.service.RegisterUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received"),
        this.router.navigate(['/login']);
      },
     error=>{
       console.log("error accured")
       this.msg="Oops! Utilisateur déjà exist ou Une erreur! veuillez ressayer";
     }
  ); 
    
  }

}
