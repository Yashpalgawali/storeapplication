import { Customer } from "./Customer"
import { Invoice } from "./Invoice"

export class CreditNote {
    credit_note_id !: number
    prefix !: string
    date_added !: string
    invoice : Invoice = new Invoice()
    customer : Customer = new Customer()
    
}