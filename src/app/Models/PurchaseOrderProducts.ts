import { PoProductsList } from "./PoProductsList"
import { PurchaseOrder } from "./PurchaseOrder"

export class PurchaseOrderProducts {

      purchase_prod_order_id !: number
      stoption !: string
	  qty !: number	
	  temp_id !: number
	  cgst_per !: number
	  sgst_per  !: number
	  igst_per!: number	
	  cgst !: number	
	  sgst !: number	
	  igst !: number	
	  unit_price !: number	
      total !: number
	  product : PoProductsList = new PoProductsList()

	  po_id : PurchaseOrder =new PurchaseOrder()
}