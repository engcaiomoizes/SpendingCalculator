import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  imports: [CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent {
  title = "Lista de Gastos";

  list$: Observable<Expense[]>;
  total$: Observable<number>;

  constructor(private expenseService: ExpenseService) {
    this.list$ = expenseService.getExpenses() as Observable<Expense[]>;
    this.total$ = this.list$.pipe(
      map(list =>
        list.reduce((acc, expense) =>
          acc + (expense.type === 'Receita' ? expense.amount : -expense.amount), 0
        )
      )
    );
  }

  async deleteExpense(id: string) {
    try {
      await this.expenseService.deleteExpense(id);
      console.log(`Expense ${id} deletada com sucesso!`);
    } catch (err) {
      console.error("Erro ao deletar expense: ", err);
    }
  }
}
