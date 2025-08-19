import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {
  title = "Formulário de Gastos";

  form = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl(0, [Validators.required, Validators.min(0.01)]),
    type: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  types = ['Receita', 'Despesa'];

  constructor(private expenseService: ExpenseService) {}

  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      const expense: Expense = this.form.value as Expense;
      this.expenseService.addExpense(expense).then(() => {
        console.log('Registro adicionado com sucesso!');
        this.form.reset();
      });
    }
  }
}
