import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  indexForEdit: any;
  student_record: any[];
  f_name: any;
  l_name: any;
  email: any;
  phone: any;
  flag_for_edit: boolean;
  constructor() {
    this.student_record = [
      {
        "firstname": "Aniket",
        "lastname": "Meshram",
        "email": "aniket.meshram@gmail.com",
        "phone": "1234567890"
      },
      {
        "firstname": "Priyanka",
        "lastname": "Pawar",
        "email": "priyanka.pawar@gmail.com",
        "phone": "789456123"
      }
    ];
    this.flag_for_edit = false;
  }

  ngOnInit() {
  }

  onDeleteClick(data, index) {
    this.student_record.splice(index, 1);
  }
  onModelAddClick(){
    this.flag_for_edit = false; 
    this.f_name=''   ;
    this.l_name='';
    this.email='';
    this.phone='';
    
  }
  onEditClick(data, index) {
    this.indexForEdit = index;
    this.flag_for_edit = true;    
    this.f_name = data.firstname;
    this.l_name = data.lastname;
    this.email = data.email;
    this.phone = data.phone;
  }

  onEditSaveClick() {
    // this.flag_for_edit = false;        
    this.student_record[this.indexForEdit].firstname = this.f_name;
    this.student_record[this.indexForEdit].lastname = this.l_name;
    this.student_record[this.indexForEdit].email = this.email;
    this.student_record[this.indexForEdit].phone = this.phone
  }

  onAddClick() {
    this.student_record.push({ "firstname": this.f_name, "lastname": this.l_name, "email": this.email, "phone": this.phone })
  }
}
