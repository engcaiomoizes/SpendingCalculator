import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss'
})
export class ExpenseFormComponent {
  title = "Formulário de Gastos";

  form = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl(0, [Validators.required, Validators.min(0.01)]),
    type: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  types = ['Receita', 'Despesa']

  submit() {
    console.log(this.form.value);
  }
}
