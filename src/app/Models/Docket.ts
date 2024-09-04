import { Party } from "./Party"

export class Docket {
    docket_id !: number
    order_id !: number
    cust_name !: string
    docket_num !: string
    //party_name !: string
    party : Party = new Party()
}
