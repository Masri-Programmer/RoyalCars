import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  MyServices:ServiceInfo[]=[];
  Cars:Cars[]=[];
  title: any;

  constructor(private apiCaller: HttpClient){

  }
  ngOnInit(): void {
   this.getServices();
   this.getCars();
  
  }
  
  getServices(){
    this.apiCaller.get('https://royalcars2030.herokuapp.com/services')
    .subscribe((data:any)=>{
      for (let i = 0; i < data.Services.length; i++) {
        var si = new ServiceInfo()
        si.title=data.Services[i]['B'];
        si.description=data.Services[i]['C'];
        si.number=data.Services[i]['A'];
        this.MyServices.push(si);
        
      }
  console.log(data)
    })
  }
  getCars(){
    this.apiCaller.get('https://royalcars2030.herokuapp.com/cars')
    .subscribe((data:any)=>{
      for (let i = 0; i < data.Cars.length; i++) {
        var c = new Cars()
        c.img=data.Cars[i]['A'];
        c.name=data.Cars[i]['B'];
        c.model=data.Cars[i]['C'];
        c.type=data.Cars[i]['D'];
        c.kilometer=data.Cars[i]['E'];
        c.price=data.Cars[i]['F'];
        this.Cars.push(c);
        
      }
  console.log(data)
    })
  }
  }
class ServiceInfo{
  
  title:string =''
  description:string =''
  number:string=''
}
class Cars{
   name:string=' ';
   model:string='';
   price:string='';
   type:string='';
   kilometer:string='';
   img:string='';
}
