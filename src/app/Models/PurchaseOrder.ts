import { PoProductsList } from "./PoProductsList"
import { Vendor } from "./Vendor"

export class PurchaseOrder {

     po_id !: number
     
     order_id !: number

     po_date !: string
     prefix!: string
     total_amount !: number
     prepared_by !: string
     transport_charge !: number
     packing_charge !: number
     vendor : Vendor = new Vendor()

     poproduct : PoProductsList = new PoProductsList()

} 