import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { VinService } from '../vin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: VinService, private router:Router ) { }
  user: User= new User()
  msg='';
  id!:number;
  message!:string;
  ngOnInit(): void {
  
  }
  

  loginUser()
  {
      this.service.loginUserFromRemote(this.user).subscribe( 
        data => {
          
          console.log(this.message),
         
           sessionStorage.setItem('id',data.id)
         console.log(this.service.parametre),
        
          this.router.navigate(['/wines'])
         
        },
       error=>{
         console.log("error accured")
         this.msg="Mauvais Email ou Mot de passe veuillez retaper";
       }
    ); 
   
    console.log(this.service.parametre);
  }

  gotoRegistration()
  {
    this.router.navigate(['/registration']);
  }
  

}
