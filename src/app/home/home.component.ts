import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {
  faUser,
  faSync,
  faBell,
  faTimes,
  faMagic,
  faAdjust,
  faCoffee,
  faCircle,
  faSquare,
  faMobile,
  faEllipsisH,
  faFighterJet,
  faBatteryQuarter,
  faCartPlus,
  faEdit,
  faEject,
  faPlus
   
 } from '@fortawesome/free-solid-svg-icons';
import { faUser as regularUser, faFlag } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private datas:any;
  public modalRef: BsModalRef;
  private data:any;
  faCoffee = faCoffee;
  faBell = faBell;
  faSync = faSync;
  faFlag = faFlag;
  faTimes = faTimes;
  faMagic = faMagic;
  faAdjust = faAdjust;
  faCircle = faCircle;
  faSquare = faSquare;
  faMobile = faMobile;
  regularUser = regularUser;
  faEllipsisH = faEllipsisH;
  faFighterJet = faFighterJet;
  faBatteryQuarter = faBatteryQuarter;
  faCartPlus = faCartPlus;
  faEdit = faEdit;
  faEject=faEject;
  private btnValue:string;
  private souscriptionData;

  constructor(private modalService: BsModalService) { 
  	 library.add(faCoffee, faMobile,faCartPlus,faEdit,faEject);
  	 this.datas= [];
  	 this.data={};
  	 this.souscriptionData={};
  }

  ngOnInit() {
	this.datas= [
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	{id:1,address:"400 Rue toto",nbr_kilos:"23",destination:"Lomé Togo",date_depart:"02/02/2019"},
	  	
  	]
  }

  public openModal(template: TemplateRef<any>,sent,btnValue) {

    this.modalRef = this.modalService.show(template);
    Object.assign(this.data,sent);
    this.btnValue=btnValue;
   	if (sent.id) {
   		// code...
   		// I've to send travel's id & User reference to a web service so it can retreive a good subsription
   		//The data will be into an object called subscription so i can do this  Object.assign(subscription,source)
   		//I can now pass the data to a modal
   		console.log("modification");
   		this.updateSubscription(sent.id);
   	}else{
   		// code...
   		//Subscription table must have he's ID, User's reference & travel's ID;
   		console.log("Ajout");
   		this.addSubscription();
   	}
  }

  addSubscription(){ 
  	// Just call Create's Service
  }

   updateSubscription(id:number){ 
    //Just call Update's Service
  }

   deleteSubscription(template: TemplateRef<any>,sent){ 
   	 //Make a request to the web service to retrieve a good subscription relatively to the choosed travel by 
   	 //passing user's reference & travel's Id. After that i can use the retried subscription's id to do the 
   	 //deletion by using elete's Service
  	 //Or the same service can do all that things in the same time.
  	 this.modalRef = this.modalService.show(template);
  }

}
