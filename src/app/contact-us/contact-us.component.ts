import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 MyContact:  ContactInfo= new  ContactInfo();
  constructor(private apiCaller : HttpClient) { }

  ngOnInit(): void {
    this.PostData();
  }
  PostData(){
    console.log(this.MyContact);
    this.apiCaller.post<any>('https://royalcars2030.herokuapp.com/ContactUs',
   
 this.MyContact   )
      .subscribe(data => {
       
    })
    
  }
}
class ContactInfo{
  
  name:String ='';
  email:String ='';
  subject:String='';
  message:String='';
}