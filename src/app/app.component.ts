import { Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


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
      'userData': new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email])
      }),
      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])

    })
  }

  onSubmit(){
    console.log(this.signupform.value)
  }
  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupform.get('hobbies')).push(control);

  }
  
 
}
