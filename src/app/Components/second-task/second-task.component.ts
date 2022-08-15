import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalInformation } from 'src/app/models/PersonalInformation';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {
  /* UI */
  isChecked: boolean;
  isLoading: boolean;
  isSubmitting: boolean = false;
  /* FORM */
  informationFormGroup: FormGroup;

  information: any;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  /* Initilize the form */
  initForm(): void {
    this.informationFormGroup = this.formBuilder.group({
      age: [null, [Validators.required]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    })
  }

  /* Get Form Controls */
  get informationForm() {
    return this.informationFormGroup.controls;
  }

  /* Submit Form */
  submit() {
    this.isLoading = true;
    
    const personalValues = this.informationFormGroup.patchValue({
      age: 25,
      name: 'Hanaa Mohamed Hashim',
      address: 'Omdurman',
      birthDate: '05/11/1997',
      gender: 'female'
    })

    console.log('personalValues', this.informationFormGroup.value)
    
    /* Check Validation */
    // if(this.informationFormGroup.invalid) {
    //   this.isSubmitting = true;
    //   this.isLoading = false;
    // }
      this.information = {
      age: this.informationForm.age.value,
      name: this.informationForm.name.value,
      address: this.informationForm.address.value,
      birthDate: this.informationForm.birthDate.value,
      gender: this.informationForm.gender.value,
    }
    
    const infoArray  = [
      {
        label : "age",
        value: this.information.age,
        type: "Number"
      },
      {
        label : "name",
        value: this.information.name,
        type: "Text"
      },
      {
        label : "address",
        value: this.information.address,
        type: "Textarea"
      },
      {
        label : "Birth Date",
        value: this.information.birthDate,
        type: "Date"
      },
      {
        label : "Gender",
        value: this.information.gender,
        type: "Boolean"
      }
    ]
    console.log('Second Task' + ' ' + 'information', infoArray);

  }
}
