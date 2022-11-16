export class Vin {
    id!: number;
    appelation!: string;
    couleur!: string;
    cepage!: string;
    description!: string;
    degre_alcool!: number;
    prix!: number;
    contenance!: number;
    idCompte!:number;
    region!:string;
     Vin( num:number)
    {
        this.idCompte=num;
    }
}
