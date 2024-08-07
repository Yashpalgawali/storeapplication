import { Customer } from "./Customer";

export class Invoice
{
    invoice_id !: number;
	order_id !: number;
    invoice_no !: number;
    prefix !: string;
    store_name !: string;
    store_url !: string;
    customer : Customer = new Customer();
    total_amount !: number;
    date_added : any;
    updated_date : any;
    vehicle !: string;
    batch_no !: string;
    orderponumber !: string;
}