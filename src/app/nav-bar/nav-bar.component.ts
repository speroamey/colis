import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public modalRef: BsModalRef; // {1}
  email:string;
  username:string;
  password:string;
  repeatPassword:string;
  adress:string:
  zipCode:string;
  city:string;
  country:string;
  phone:number;
  accountData:any;

  constructor(private modalService: BsModalService) {
  	this.accountData={};
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }


  public saveAccount(template: TemplateRef<any>){
    console.log(this.accountData);
    console.log(template);
     this.modalRef.hide();
  }

  ngOnInit() {
  }




}
