import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

name = ""
doctor = ""
mobileno = ""
address = ""
  
constructor(private api:ApiService){}

readValues=()=>
{
  let data:any={
    name :this.name ,
    doctor:this.doctor,
    mobileno:this.mobileno,
    address:this.address
    }
    this.api.adddata(data).subscribe(
    (response)=>{
    console.log(response)
    alert("Data Added")
  }
)
}



}
