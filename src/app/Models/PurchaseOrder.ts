import { PoProductsList } from "./PoProductsList"
import { Vendor } from "./Vendor"

export class PurchaseOrder {

     po_order_id !: number
     prepared_by !: string
     transport_charge !: number
     packing_charge !: number
     vendor : Vendor = new Vendor()

     poproduct : PoProductsList = new PoProductsList()

} 