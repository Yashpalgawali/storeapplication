import { Product } from "./Product";

export class Temp_Invoice{

      temp_id !: number;
	  temp_invoice_id !: number;
	  qty !: number;
	  unit_price !: number;
	  unit !: string;
	  total !: number;
	  vat_per !: number;
	  hsn !: string;
	  cgst !: number;
	  sgst !: number;
	  igst !: number;
	  cgst_per !: number;
	  sgst_per!: number;
	  igst_per!: number;
	  custom_price !: number;
	  stoption !: string;
      product : Product = new Product() ;
	  prodlist : Product[] =[]
}