import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  moduleId: module.id,
  selector: 'data-driven',
  templateUrl: './data-driven.component.html',
    styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})

export class DataDrivenComponent {
    myForm: FormGroup;
    
    
    constructor() {
     this.myForm = new FormGroup({
       
         'username': new FormControl('Puneet', Validators.required),         
      
       
     });
    }
        
    onSubmit(){
    console.log(this.myForm)
    }   


}