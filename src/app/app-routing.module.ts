import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './MyComponents/product/addproduct/addproduct.component';
import { ViewproductComponent } from './MyComponents/product/viewproduct/viewproduct.component';
import { AddcustomerComponent } from './MyComponents/Customer/addcustomer/addcustomer.component';
import { ViewcustomersComponent } from './MyComponents/Customer/viewcustomers/viewcustomers.component';
import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';
import { ViewvendorComponent } from './MyComponents/Vendor/viewvendor/viewvendor.component';
import { AddinvoiceComponent } from './MyComponents/Invoice/addinvoice/addinvoice.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RouteGuardService } from './Services/route-guard.service';
import { LogoutComponent } from './MyComponents/logout/logout.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { EditproductComponent } from './MyComponents/product/editproduct/editproduct.component';
import { ViewinvoiceComponent } from './MyComponents/Invoice/viewinvoice/viewinvoice.component';
import { EditinvoiceComponent } from './MyComponents/Invoice/editinvoice/editinvoice.component';
import { AddpurchaseorderComponent } from './MyComponents/PurchaseOrder/addpurchaseorder/addpurchaseorder.component';
import { AddpoproductComponent } from './MyComponents/PoProducts/addpoproduct/addpoproduct.component';
import { ViewpoproductsComponent } from './MyComponents/PoProducts/viewpoproducts/viewpoproducts.component';
import { EditpoproductComponent } from './MyComponents/PoProducts/editpoproduct/editpoproduct.component';
import { EditvendorComponent } from './MyComponents/Vendor/editvendor/editvendor.component';
import { ViewpurchaseorderComponent } from './MyComponents/PurchaseOrder/viewpurchaseorder/viewpurchaseorder.component';
import { EditpurchaseorderComponent } from './MyComponents/PurchaseOrder/editpurchaseorder/editpurchaseorder.component';
import { ViewinvoicetemplateComponent } from './MyComponents/Invoice/viewinvoicetemplate/viewinvoicetemplate.component';
import { ActivityComponent } from './MyComponents/activity/activity.component';
import { EditcustomerComponent } from './MyComponents/Customer/editcustomer/editcustomer.component';
import { AddprefixComponent } from './MyComponents/Prefix/addprefix/addprefix.component';
import { AdddocketComponent } from './MyComponents/Docket/adddocket/adddocket.component';
import { ViewdocketComponent } from './MyComponents/Docket/viewdocket/viewdocket.component';
import { AddpartyComponent } from './MyComponents/Party/addparty/addparty.component';
import { ViewpartyComponent } from './MyComponents/Party/viewparty/viewparty.component';
import { PrintpurchaseorderComponent } from './MyComponents/PurchaseOrder/printpurchaseorder/printpurchaseorder.component';
import { AddcreditnoteComponent } from './MyComponents/CreditNote/addcreditnote/addcreditnote.component';
import { ChangepasswordComponent } from './MyComponents/Password/changepassword/changepassword.component';

const routes: Routes = [
    {path : "product" , component : AddproductComponent,canActivate : [RouteGuardService]},
    {path : "viewproduct" , component : ViewproductComponent, canActivate : [RouteGuardService]},
    {path : "edit/product/:id" , component : EditproductComponent ,canActivate : [RouteGuardService]},
    
    {path : "addcustomer" , component : AddcustomerComponent, canActivate : [RouteGuardService]},
    {path : "viewcustomers" , component : ViewcustomersComponent,canActivate : [RouteGuardService]},
    {path : "edit/customer/:id" , component : EditcustomerComponent ,canActivate : [RouteGuardService]},

    {path : "addpoproduct" , component : AddpoproductComponent,canActivate : [RouteGuardService]},
    {path : "viewpoproduct" , component : ViewpoproductsComponent,canActivate : [RouteGuardService]},
    {path : "edit/poproduct/:id" , component : EditpoproductComponent ,canActivate : [RouteGuardService]},

    {path : "addvendor" , component : AddvendorComponent,canActivate : [RouteGuardService]},
    {path : "viewvendors" , component : ViewvendorComponent,canActivate : [RouteGuardService]},
    {path : "edit/vendor/:id" , component : EditvendorComponent ,canActivate : [RouteGuardService]},

    {path : "addinvoice" , component : AddinvoiceComponent,canActivate : [RouteGuardService]},
    {path : "viewinvoice" , component : ViewinvoiceComponent,canActivate : [RouteGuardService]},
    {path : "edit/invoice/:id" , component : EditinvoiceComponent ,canActivate : [RouteGuardService]},
    {path : "view/invoice/:id" , component : ViewinvoicetemplateComponent ,canActivate : [RouteGuardService]},

    {path : "addpurchaseorder" , component : AddpurchaseorderComponent, canActivate : [RouteGuardService]},
    {path : "viewpurchaseorder" , component : ViewpurchaseorderComponent, canActivate : [RouteGuardService]},
    {path : "edit/purchaseorder/:id" , component : EditpurchaseorderComponent, canActivate : [RouteGuardService]},
    {path : "view/purchaseorder/:id" , component :  PrintpurchaseorderComponent ,canActivate : [RouteGuardService]},

    {path : "activity" , component : ActivityComponent, canActivate : [RouteGuardService]},

    {path : "addprefix" , component : AddprefixComponent, canActivate : [RouteGuardService]},

    {path : "adddocket" , component : AdddocketComponent, canActivate : [RouteGuardService]},
    {path : "edit/docket/:id" , component : AdddocketComponent, canActivate : [RouteGuardService]},
    {path : "viewdockets" , component : ViewdocketComponent, canActivate : [RouteGuardService]},

    {path : "addparty" , component : AddpartyComponent, canActivate : [RouteGuardService]},
    {path : "edit/party/:id" , component : AddpartyComponent, canActivate : [RouteGuardService]},
    {path : "viewparties" , component : ViewpartyComponent, canActivate : [RouteGuardService]},

    {path : "addcreditnote" , component : AddcreditnoteComponent, canActivate : [RouteGuardService]},

    {path : "login" , component : LoginComponent },
    {path : "" , component : LoginComponent },
    {path : "logouturl" , component : LogoutComponent , canActivate : [RouteGuardService]},
    {path : "home" , pathMatch : 'full', component : HomeComponent ,canActivate : [RouteGuardService]},
     
    {path : "changepass" , component : ChangepasswordComponent, canActivate : [RouteGuardService]}

     
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 