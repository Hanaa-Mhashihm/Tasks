import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppRoutes } from 'src/app/models/AppRoutes';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent implements OnInit {

  /* UI */
  employeeId:number = 223344;
  monthlySalary: number = 4500;
  loan: number = 20000;
  tenure: number = 7;
  requestDate: string = "5/6/2020";
  isLoading: boolean;
  isSubmitting: boolean;
  /* Form */
  loanFormGroup: FormGroup;
  /* Route */
  secondTask = AppRoutes.secondTask;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loanFormGroup = this.formBuilder.group({
      employeeId: [null, Validators.required],
      monthlySalary: [null, Validators.required],
      loan: [null, Validators.required],
      tenure: [null, Validators.required],
      requestDate: [null, Validators.required],
    })
  }

  get loanForm() {
    return this.loanFormGroup.controls;
  }

  /* Submit Form */
  submit() {
    this.isLoading = true;
    
    /* Check Validation */
    if(this.loanFormGroup.invalid) {
      this.isSubmitting = true;
      this.isLoading = false;
    }

    const formValues: any = {
      employeeId: this.loanForm.employeeId.value,
      monthlySalary: this.loanForm.monthlySalary.value,
      loan: this.loanForm.loan.value,
      tenure: this.loanForm.tenure.value,
      requestDate: this.loanForm.requestDate.value,

    }

    let deductedLoan: any = (formValues.loan / formValues.tenure).toFixed(2);
    let finalLoan = formValues.loan - ((deductedLoan) * (formValues.tenure - 1))
    let loanManagement;
    for (let i=1; i <= formValues.tenure; i++){
      loanManagement = {
        month: (new Date(formValues.requestDate).getMonth()+1) + i,
        year: new Date(formValues.requestDate).getFullYear(),
        // 17142.84
        amount: deductedLoan
      }
      if(loanManagement.month > 12) {
        loanManagement.month = loanManagement.month - 12;
        loanManagement.year = new Date(formValues.requestDate).getFullYear()+1
      }
      if(i == formValues.tenure){
        loanManagement.amount = finalLoan.toFixed(2);
      }
      console.log('Loan Management Output', loanManagement);
    }
      

    // }
    // else {
    //   console.log('Your Montly Salary is less than deducted loan');
    // }
  }
}
