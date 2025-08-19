import { Routes } from '@angular/router';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    { path: '', component: ExpenseListComponent, canActivate: [authGuard] },
    { path: 'cadastro', component: ExpenseFormComponent, canActivate: [authGuard] },
    { path: 'grafico', component: ExpenseChartComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent, canActivate: [loginGuard] }
];
