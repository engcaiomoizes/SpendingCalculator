import { Injectable } from "@angular/core";
import { Expense } from "../models/expense.model";

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
    private storageKey = 'expenses';

    getExpenses(): Expense[] {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    addExpense(expense: Expense): void {
        const expenses = this.getExpenses();
        expenses.push(expense);
        localStorage.setItem(this.storageKey, JSON.stringify(expenses));
    }

    deleteExpense(id: string): void {
        let expenses = this.getExpenses();
        expenses = expenses.filter(exp => exp.id != id);
        localStorage.setItem(this.storageKey, JSON.stringify(expenses));
    }
}