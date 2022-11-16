import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http'
import { Vin } from './vin';
import { User } from './user';
import { Producteur } from './producteur';

@Injectable({
  providedIn: 'root'
})
export class VinService {
   parametre: number = 11;
  private baseURL = "http://localhost:8080/api/v1/wines";
  private base="http://localhost:8080/api/v1/vin";
 private base2=" http://localhost:8080/api/v1/vin";
  private base1="http://localhost:8080/api/v1/compte";
  private base3="http://localhost:8080/api/v1/producteur"
  private base4="http://localhost:8080/api/v1/region"
  private base5="http://localhost:8080/api/v1/filtre"
  private base6="http://localhost:8080/api/v1/filtre2"
  private base7="http://localhost:8080/api/v1/filtre1"
  private base8="http://localhost:8080/api/v1/ProducteurRegion"
  private base9="http://localhost:8080/api/v1/Producteurs"
  private base10="http://localhost:8080/api/v1/UserById"
  shared!:number;
  sharedUser: User=new User();
  constructor(private httpClient: HttpClient) { }
  
  getVinsList(): Observable<Vin[]>{
    return this.httpClient.get<Vin[]>(`${this.baseURL}`);
  }

  createVin(vin: Vin): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, vin);
  }

  getVinById(id: number): Observable<Vin>{
    return this.httpClient.get<Vin>(`${this.baseURL}/${id}`);
  }

  updateVin(id: number, vin: Vin): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, vin);
  }

  deleteVin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  loginUserFromRemote(user:User): Observable<any>
  {
   
    return this.httpClient.post<any>("http://localhost:8080/api/v1/login",user);
  }
  RegisterUserFromRemote(user:User): Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:8080/api/v1/users",user);
  }
  RechercheParCouleur(couleur: string): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base}/${couleur}`));
  }
  RechercheParIdCompte(idcompte:number): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base1}/${idcompte}`));
  }
  AddProducteur(producteur:Producteur) :Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:8080/api/v1/producteur",producteur);
  }


  RechercheParCouleurCompte(couleur: string,id:number): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base}/${couleur}/${id}`));
  }
  RechercheProducteurParIdCompte(idcompte:number): Observable<Producteur>
  {
    return this.httpClient.get<Producteur>((`${this.base3}/${idcompte}`));
  }
  RechercheRegion(region:string): Observable<any>
  {
    return this.httpClient.get<any>(`https://nominatim.openstreetmap.org/search?q=${region}&format=json&addressdetails=1&limit=1&polygon_svg=1`);
  }
  RechercheVinByRegion(region:string): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base4}/${region}`));
  }

  RecherchePrix(prix:string): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base5}/${prix}`));
  }
  RechercheRegionPrix(region:string,prix:string): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base6}/${region}/${prix}`));
  }
  RechercheCouleurPrix(couleur:string,prix:string): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base7}/${couleur}/${prix}`));
  }
  RechercheCouleurRegion(couleur:string,region:string): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base5}/${couleur}/${region}`));
  }
  RechercheCouleurRegionPrix(couleur:string,region:string,prix:string): Observable<Vin[]>
  {
    return this.httpClient.get<Vin[]>((`${this.base5}/${couleur}/${region}/${prix}`));
  }
  RechercheProducteurRegionViticole(regionviticole:string): Observable<Producteur[]>
  {
    return this.httpClient.get<Producteur[]>((`${this.base8}/${regionviticole}`));
  }
  getProduteurs(): Observable<Producteur[]>
  {
    return this.httpClient.get<Producteur[]>((`${this.base9}`));
  }
  getUserById(id:number): Observable<User>
  {
    return this.httpClient.get<User>((`${this.base10}/${id}`));
  }





}