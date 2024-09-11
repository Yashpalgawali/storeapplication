import { Invoice } from "./Invoice"
import { Product } from "./Product"

export class Invoice_Product {
      inv_prod_id !: number
	  qty !: number
	  price !: number
	  subtotal !: number
	  total !: number
	  cgst !: number
	  sgst !: number
	  igst !: number
	  cgst_per !: number
	  sgst_per!: number
	  igst_per!: number
      order_id !: string
      invoice : Invoice = new Invoice()
	  stoption !: string
	  custom_price !: number
      product : Product = new Product()
}