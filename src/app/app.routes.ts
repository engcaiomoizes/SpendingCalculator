import { Routes } from '@angular/router';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';

export const routes: Routes = [
    { path: '', component: ExpenseListComponent },
    { path: 'cadastro', component: ExpenseFormComponent },
    { path: 'grafico', component: ExpenseChartComponent }
];
