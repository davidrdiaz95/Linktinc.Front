export interface IProduct {
    id: number;
    Name: string;
    Price: number;
    Description : string;
    Amount: number;
    amount_sale: number;
  }

  export class Product implements IProduct{
    id= 0;
    Name= "";
    Price= 0;
    Description = "";
    Amount= 0;
    amount_sale= 0;
  }
  
  