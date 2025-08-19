import { Injectable } from "@angular/core";
import { Expense } from "../models/expense.model";
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
    constructor(private firestore: Firestore) {}

    addExpense(expense: Expense) {
        const expensesRef = collection(this.firestore, 'expenses');
        return addDoc(expensesRef, expense);
    }

    getExpenses(): Observable<Expense[]> {
        const expensesRef = collection(this.firestore, 'expenses');
        return collectionData(expensesRef, { idField: 'id' }) as Observable<Expense[]>;
    }

    // private storageKey = 'expenses';

    // getExpenses(): Expense[] {
    //     const data = localStorage.getItem(this.storageKey);
    //     return data ? JSON.parse(data) : [];
    // }

    // addExpense(expense: Expense): void {
    //     const expenses = this.getExpenses();
    //     expenses.push(expense);
    //     localStorage.setItem(this.storageKey, JSON.stringify(expenses));
    // }

    // deleteExpense(id: string): void {
    //     let expenses = this.getExpenses();
    //     expenses = expenses.filter(exp => exp.id != id);
    //     localStorage.setItem(this.storageKey, JSON.stringify(expenses));
    // }
}