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

    let deductedLoan = (formValues.loan / formValues.tenure).toFixed(2);
    // formValues.requestDate = new Date(formValues.requestDate).toISOString();
    let month = new Date(formValues.requestDate).getMonth();

    // let month = date.getMonth()
    for (let i=1; i <= formValues.tenure; i++){
      const loanManagement = {
        deductedLoan: (formValues.loan / formValues.tenure).toFixed(2),
        month: (new Date(formValues.requestDate).getMonth()+1) + i,
        year: new Date(formValues.requestDate).getFullYear()
      }
      if(loanManagement.month > 12) {
        let j = 0;
        for(j=0; j<=i; j++){
          loanManagement.month = loanManagement.month - j;
          loanManagement.year = new Date(formValues.requestDate).getFullYear()+1
        }
      }
      console.log('Date', loanManagement);
    }
    // console.log('deductedLoan', deductedLoan);
  }

  claculate() {
      let deductedLoan = (this.loan / 7).toFixed(2);
      // let result1 = deductedLoan.toFixed(2);
      
      for(let i=0; i<7; i++){
        let result;
        if(i < 6) {
          result = [
            {
              month: 7 + i,
              year: '2020',
              amount: deductedLoan
            }
          ]
        }
        else {
          result = [
            {
              month: 1,
              year: '2021',
              amount: 2857.14 + 0.02
            }
          ]
        }
        console.log('First Task' + ' ' +' deductedLoan', result);
      }
  }

}
