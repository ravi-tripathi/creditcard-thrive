import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {getCardType, isCVVValid, } from '../../utils/form.validations'

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm = this.fb.group({
    cardno : ['', Validators.required],
    name : ['', Validators.required],
    month : ['', Validators.required],
    year: ['', Validators.required],
    cvv : ['', Validators.required]
  });
  
  months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  years = [2022, 2023, 2024, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('Form Value', this.cardForm, this.cardForm.value);
    if (this.cardForm.status !== 'INVALID' ){
      const cardType = getCardType(JSON.stringify(this.cardForm.value.cardno));
      console.log('cardType', cardType);
      this.dialog.open(DialogComponent, {
        data: {
          cardData: this.cardForm.value,
          cardType: cardType
        },
      });
    }
  }

}
