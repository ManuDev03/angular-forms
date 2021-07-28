import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  genders =["male","female"]
  signupform: FormGroup;

  ngOnInit(){
    this.signupform = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'gender': new FormControl('')

    })
  }

  onSubmit(){
    console.log(this.signupform.value)
  }
  
 
}
