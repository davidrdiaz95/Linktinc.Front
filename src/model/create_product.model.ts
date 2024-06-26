export interface ICreateProduct {
    id: number;
    name: string;
    price: number;
    description : string;
    amount: number;
    amount_sale: number;
  }

  export class CreateProduct implements ICreateProduct{
    id= 0;
    name= "";
    price= 0;
    description = "";
    amount= 0;
    amount_sale= 0;
  }
  
  